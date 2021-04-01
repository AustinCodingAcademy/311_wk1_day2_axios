const axios = require('axios'); 

const api_key = 'd771b19ef336ed8381def3a60b574464'; 

axios(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`)
  .then(function (response){//use this url when making request to axios library. console log the response it returns. 
    console.log(response); 
})
  
function discoverMovie(){
    
  const url =`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`
  
  return axios(url); //return response from a call to axios library with given url
  
}

function getMovieById(id){
  
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`
  
  return axios(url)
  .then(function(response){// make call to axios library with given url and id argument(number). return the data from the response and log to console.
    return response.data; 
  })
}


const getMovieByIdFailure = () => {
  const fakeId = 5783 // FAKE ID HERE
  const url = `https://api.themoviedb.org/3/movie/${fakeId}?api_key=${api_key}`

  return axios(url)
    .then(function(response){
      return response.status//return and check status of the response
    })
    .catch(function(error){// used to catch the error that is returned(failed to get move by id because page doesnt exist). page doesnt exist so a 404 not found comes back. 
      return error.response.status 
    }); 
}



module.exports = {
  discoverMovie,
  getMovieById,
  getMovieByIdFailure
}