// import axios here
const axios = require('axios');
const config = require('../config');

// const api_key = 'd771b19ef336ed8381def3a60b574464'


const discoverMovie = () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${config.api_key}`
  return axios(url).then(response => response)
}
console.log('hello')

const getMovieById = (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${config.api_key}`
  return axios(url).then(response => response.data)
}

const getMovieByIdFailure = () => {
  const fakeId = 5783
  const url = `https://api.themoviedb.org/3/movie/${fakeId}?api_key=${config.api_key}`
  return axios(url).then(response => response.status).catch(err => err.response.status)
}


module.exports = {
  discoverMovie,
  getMovieById,
  getMovieByIdFailure
}