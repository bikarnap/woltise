//***************************************************************************
// function to process the query parameter q                                *
// it checks if the minimum lenght of q is 1 and all or partial matches of  *
// q string to eihter tags, name, description, or query fields of the json  *
// file and returns matches if the given conditions are true                *
//*************************************************************************//
 

const processQueryString = (tags, name, description, query) => {
    if(query.length >=1) {
        return tags.join('').toUpperCase().includes(query.toUpperCase()) ||
                name.split(' ').join('').toUpperCase().includes(query.toUpperCase())||
                description.split(' ').join('').toUpperCase().includes(query.toUpperCase());
    }
  }

  module.exports = processQueryString;