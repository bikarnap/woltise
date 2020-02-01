//**************************************************************************
// function to find the distance between two locations                     *
// function takes four parameters in the form of latitudes and longitudes  *
// function returns the distance in kilometers                             *
// Math.PI/180 converts the given angle of longitude or latitude to        *
// radians                                                                 *
//************************************************************************//

const getDistance = (lat1, lat2, lon1, lon2) => {
    const radius = 6371; // radius of the earth in kilometers
    let diffLat = (lat2 - lat1) * Math.PI/180; 
    let diffLon = (lon2 - lon1) * Math.PI/180; 
    let phi1 = lat1 * Math.PI/180;
    let phi2 = lat2 * Math.PI/180;
    let a = Math.sin(diffLat/2) * Math.sin(diffLat/2) +
          Math.cos(phi1) * Math.cos(phi2) *
          Math.sin(diffLon/2) * Math.sin(diffLon/2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  
    let distance = radius * c;
    return (distance); //in km
  }

  module.exports = getDistance;