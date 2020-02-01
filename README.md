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

# Running the project
#### Before the project can be run, the system running it should have NodeJs installed
* Launch Terminal or GitBash or similar environment
* Navigate to the root folder woltise
* Enter the command npm install to install the dependencie(s) used
* Then enter the command npm start. There  should be a console log saying "Server running on port 8080"; 8080 is the default port, however if an environment variable 'PORT' have been defined in the system running the app, 8080 will be replaced by that port number.
* Open a web browser and navigate to http://localhost:8080/restaurants/search?q=[]&lat=[]&lon=[]. The [] should be replaced by the desired parameters. Note: The default port is defined to be 8080 unless the running system has a PORT environment variable predefined.
* If the query parameters satisfy the backend logics, restaurants with their respective properties would be returned. For instance, the example query mentioned above would return 9 restaurants that are nearer than 3 kilometers from the customer's location and the restaurants' description/name/tags includes the query string 'sushi'.

#### Also note that it has been tested in the localhost environment (http://localhost:8080/restaurants/search?q=sushi&lat=60.17045&lon=24.93147). So, if it is to be run on a different host, localhost:8080 should be replaced by that.

## Dependencies used
* fs from Nodejs
* Express
