axios.get('/user?ID=12345')
  

// import axios here
const axios = require('axios')
const config = require('../config')

// Please note that it is normally not considered best practice to commit 
// api keys to github as it presents a security risk. It is done here only 
// for practice purposes as we are sharing the same account
const api_key = 'd771b19ef336ed8381def3a60b574464'

const discoverMovie = () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${config.API_KEY}`
  axios.get(url).then(function(response) {
    console.log(response.data)
  })
  .catch(function(error){
    console.log(error)
  })
}
discoverMovie()



const getMovieById = (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`
  axios.get(url, {
    params: {
      id: 500
    }
  })
  .then(function(response) {
    console.log (response .data.origin)
  })
}
// import axios from 'axios'

// const api = axios.create({
//     baseURL: 'http://localhost:3000/api',
// })

const getMovieByIdFailure = () => {
  const fakeId = 5783
  const url = `https://api.themoviedb.org/3/movie/${fakeId}?api_key=${api_key}`
axios.get(url)
.then(function(response){

})
}



module.exports = {
  discoverMovie,
  getMovieById,
  getMovieByIdFailure
}