const axios = require('axios');

// Please note that it is normally not considered best practice to commit 
// api keys to github as it presents a security risk. It is done here only 
// for practice purposes as we are sharing the same account
const api_key = 'd771b19ef336ed8381def3a60b574464';

const discoverMovie = () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`;

  axios(url)//same as axios.get('url')
    .then( response => console.log(response));
 return axios(url);  //to get jest to pass - equivalent of calling funct w/ statement; ?
   
};


const getMovieById = (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`;
  return axios(url)
    .then( response => response.data);


const getMovieByIdFailure = () => {
  const fakeId = '5783'
  const url = `https://api.themoviedb.org/3/movie/${fakeId}?api_key=${api_key}`;
  return axios(url)
    .then( response => response) //same as response.data
    .catch( error => error.response.status);
};


module.exports = {
  discoverMovie,
  getMovieById,
  getMovieByIdFailure
}