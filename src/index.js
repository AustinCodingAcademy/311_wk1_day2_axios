const axios = require('axios');

// Please note that it is normally not considered best practice to commit 
// api keys to github as it presents a security risk. It is done here only 
// for practice purposes as we are sharing the same account
const api_key = 'd771b19ef336ed8381def3a60b574464';

const discoverMovie = () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`;
  //same as axios.get('url')
  axios(url)
    .then(function (response) {
    console.log(response);
    });
 return axios(url);  //to get jest to pass - equivalent of calling funct w/ statement; ?
   
};



const getMovieById = (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`
  axios(url)
    .then(function (response){
    return result.data;
  });
};


const getMovieByIdFailure = () => {
  const fakeId = '5783'
  const url = `https://api.themoviedb.org/3/movie/${fakeId}?api_key=${api_key}`
  axios(url)
    .then(function (response){
      return status; 
    })
    .catch(function (error){
      return error.response.status;
    })
}


module.exports = {
  discoverMovie,
  getMovieById,
  getMovieByIdFailure
}