//************************************************************************* 
// function to process and return the results of the query parameters     *
//***********************************************************************//

const processQueryString = require('./processQueryString');
const processDistance = require('./processDistance');

const processQueryResults = (restaurants, query, lat, lon) => {
    if(query.length >= 1) {
        const results = restaurants.filter(restaurant => 
            processQueryString(restaurant.tags, restaurant.name, restaurant.description, query) &&
                processDistance(lat, restaurant.location[1], lon, restaurant.location[0])
         )
         return results;
    }
}

module.exports = processQueryResults;