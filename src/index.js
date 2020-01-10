// import axios here
const axios = require('axios')

// Please note that it is normally not considered best practice to commit 
// api keys to github as it presents a security risk. It is done here only 
// for practice purposes as we are sharing the same account
const api_key = 'd771b19ef336ed8381def3a60b574464'


// axios.get('/user?ID=12345')
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

const discoverMovie = () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`
  // code here
  return axios(url)
  .then(res => {
    console.log('Res: ', res.data.results)
    return(res)
    
  })}
  
  // .catch(function (error) {
  //   console.log(error);
  // });



const getMovieById = (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`
  // code here
  return axios(url)
  .then(res => {
    console.log('Res: ', res.data.results)
    return(res.data)
    
  })}

const getMovieByIdFailure = () => {
  const fakeId = 5783 // FAKE ID HERE
  const url = `https://api.themoviedb.org/3/movie/${fakeId}?api_key=${api_key}`
  // code here

  return axios(url)
  .then(res => {
    console.log('Res: ', res.status)
    return(res.status)
  })
  .catch(function (error) {
    return(error.response.status);
  }); 
}




module.exports = {
  discoverMovie,
  getMovieById,
  getMovieByIdFailure
}