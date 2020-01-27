const fs = require('fs');
const express = require('express');
const fileUrl = 'restaurants.json';

const app = express(); 
const port = process.env.PORT || 8080;

// function to find the distance between two locations
const getDistance = (lat1, lat2, lon1, lon2) => {
    const radius = 6371; // radius of the earth in kilometers
    let diffLat = ((lat2 - lat1) * Math.PI)/180; // difference in latitudes converted to radians
    let diffLon = (lon2 - lon1) * Math.PI/180; // difference in longitudes converted to radians
    let phi1 = lat1 * Math.PI/180;
    let phi2 = lat2 * Math.PI/180;
    let a = Math.sin(diffLat/2) * Math.sin(diffLat/2) +
          Math.cos(phi1) * Math.cos(phi2) *
          Math.sin(diffLon/2) * Math.sin(diffLon/2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  
    let distance = radius * c;
    return (distance); //in km
  }


const processQueryString = (tags, name, description, query) => {
    if(query.length >=1) {
        return tags.join('').toUpperCase().includes(query.toUpperCase()) ||
                name.split(' ').join('').toUpperCase().includes(query.toUpperCase())||
                description.split(' ').join('').toUpperCase().includes(query.toUpperCase());
    }
  }


  const processDistance = (lat1, lat2, lon1, lon2) => {
    console.log("Distance: ",getDistance(lat1, lat2, lon1, lon2) )
    if(getDistance(lat1, lat2, lon1, lon2) < 3) 
        return true; 
    else 
        return false;
  }
    

const processQueryResults = (restaurants, query, lat, lon) => {
     const results = restaurants.filter(restaurant => 
        processQueryString(restaurant.tags, restaurant.name, restaurant.description, query) &&
            processDistance(lat, restaurant.location[1], lon, restaurant.location[0])
     )
     return results;
}

// GET all the restaurants
app.get('/restaurants', (req, res) => {
    fs.readFile(fileUrl, 'utf-8', (error, data) => {
        if(error) throw error.message;
        const restaurants = JSON.parse(data);
        if(!restaurants) res.status(404).send("No restaurants found");
        else res.send(restaurants);
    })
})

// API for search query with query parameters q, lat, and lon
app.get('/restaurants/search', (req, res) => {
    fs.readFile(fileUrl, 'utf-8', (error, data) => {
        if(error) throw error.message;
        const restaurants = JSON.parse(data)["restaurants"];
        const searchParams = req.query;
        const queryResults = processQueryResults(restaurants,searchParams.q, searchParams.lat, searchParams.lon);
        if(queryResults.length < 1) res.status(404).send(
            "No restaurants found with the given queries");
        else res.send({"restaurants":queryResults});      
    })
})

// Listen to server 
app.listen(port, () => console.log(`Server listening on port ${port}`)); 

// Test api 
// --> /restaurants/search?q=sushi&lat=60.17045&lon=24.93147