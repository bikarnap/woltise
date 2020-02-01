# Backend API
This is a Nodejs backend API project consisting of one REST API endpoint that allows searching restaurants. 
API needs to accept three parameters as follows:
* q: query string. Full or partial match for the string is searched from name, description and tags fields. A minimum length for the query string is one character.
* lat: latitude coordinate (customer's location)
* lon : longitude coordinate (customer's location)
API should return restaurant (objects) which match the given query string and are closer than 3 kilometers from the customer's coordinates.

Example query:
/restaurants/search?q=sushi&lat=60.17045&lon=24.93147

This search would return restaurants (in JSON format) which contain a word sushi and are closer than 3km to the point [60.17045, 24.93147].

## Running the project
* Navigate to the root folder of this project. For example, if it is copied inside a folder called backend, the current working directory should be backend.
* Enter the command npm install
* Then enter the command npm start. There*  should be a console log saying "Servering running on port [port#]"
* Open a web browser and navigate to localhost:[port#]/restaurants/search?q=[]&lat=[]&lon=[]. The [] should be replaced by the desired parameters. Note: The default port is defined to be 8080 unless the running system has a PORT environment variable predefined.
* If the query parameters satisfy the backend logics, restaurants with their respective properties would be returned. For instance, the example query mentioned above would return 9 restaurants.

## Dependencies used
* fs from Nodejs
* Express
