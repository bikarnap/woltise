//************************************************************************
// function to check if the distance from the given query latitude       *
// and longitude to the available restaurants is less than 3 kilometers  *
//**********************************************************************// 

const distance = require('./getDistance');

const processDistance = (lat1, lat2, lon1, lon2) => {
    if(distance(lat1, lat2, lon1, lon2) < 3) 
        return true; 
    else 
        return false;
}
    

module.exports = processDistance;