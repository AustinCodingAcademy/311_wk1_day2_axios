// import axios here
const axios = require('axios')


// Please note that it is normally not considered best practice to commit 
// api keys to github as it presents a security risk. It is done here only 
// for practice purposes as we are sharing the same account
const api_key = 'd771b19ef336ed8381def3a60b574464'



// discoverMovie
  // The initial call will be made by typing axios(url)
  // Axios is a promise (like fetch) so use the .then function to log the result
  // Take a look in your console and examine what was returned
  // When complete, go back and simply return the original axios call to make the test pass
const discoverMovie = () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`

  return axios.get(url)
    .then(function (response) {
      // handle success
      return response;
    })

}


// getMovieById
  // Looking at the result from the last function, you should have seen a lot of properties/data. A lot of that data is not useful to our application.
  // We will return the result similar to the last function but this time append .then and just return result.data
  // The movie title should have been "Reservoir Dogs"
const getMovieById = (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`

  return axios.get(url)
    .then(function (result) {
      // handle success
      return result.data;
  })

}

// getMovieByIdFailure
  // Look at the fakeId on the first line of this function and notice the comment "FAKE ID HERE". Replace the number 1 with the number 5783
  // This call is designed to fail because the movie id 5783 doesn't exist. When axios encounters a status code above 301 it automatically throws an error so in this function we will need then AND catch statements
  // Start with return axios(url) like usual
  // Then use the .then statement to return the status of the response (if successful)
  // Then use the .catch statement which always starts with the parameter error. Return the status of the response of the error (error.response.status)
  // If successful, the test will have passed after receiving a 404 status code
const getMovieByIdFailure = () => {
  const fakeId = 5783 // FAKE ID HERE
  const url = `https://api.themoviedb.org/3/movie/${fakeId}?api_key=${api_key}`
  // code here

  return axios.get(url)
    .then(function (response) {
      // handle success
      return response;
    })
    .catch(function(error) {
      return error.response.status;
    })
  
}



module.exports = {
  discoverMovie,
  getMovieById,
  getMovieByIdFailure
}
