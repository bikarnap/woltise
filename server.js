const fs = require('fs');
const express = require('express');
const fileUrl = 'restaurants.json';

const app = express(); 
const port = process.env.PORT || 8080;


// References
// 404 not found


// Test api 
// --> /restaurants/search?q=sushi&lat=60.17045&lon=24.93147

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
        const restaurants = JSON.parse(data);
        const queryParams = req.query;
        const queryResults = restaurants["restaurants"].filter(restaurant => {
            const tags = restaurant.tags.includes(queryParams.q);
            const lat = restaurant.location.includes(parseFloat(queryParams.lat));
            const lon = restaurant.location.includes(parseFloat(queryParams.lon));
            if(tags && lat && lon) return restaurant;
        })
        if(queryResults == "") res.status(404).send("No restaurants found with the given queries");
        else res.send(queryResults);
    })
})




// Listen to server 
app.listen(port, () => console.log(`Server listening on port ${port}`)); 




