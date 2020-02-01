// The main server file containing the API endpoint defintion

const fs = require('fs');
const express = require('express');
const processQueryResults = require('./source/processQueryResults');

const app = express(); 
const port = process.env.PORT || 8080; //default port assigned to be 8080

const fileUrl = 'restaurants.json';

// API for search query with query parameters q, lat, and lon
app.get('/restaurants/search', (req, res) => {
    fs.readFile(fileUrl, 'utf-8', (error, data) => {
        if(error) throw error.message;
        
        const restaurants = JSON.parse(data)["restaurants"];
        const searchParams = req.query;
        const queryResults = processQueryResults(
            restaurants,searchParams.q, searchParams.lat, searchParams.lon);
        
        if(queryResults.length < 1) res.status(404).send(
            `<h1>No restaurants found with the given queries</h1>`);
        else res.send({"restaurants":queryResults});      
    })
})

// Listen to server 
app.listen(port, () => console.log(`Server listening on port ${port}`)); 

