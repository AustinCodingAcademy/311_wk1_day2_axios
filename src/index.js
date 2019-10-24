// import axios here
const axios = require('axios')
// Please note that it is normally not considered best practice to commit 
// api keys to github as it presents a security risk. It is done here only 
// for practice purposes as we are sharing the same account
const api_key = 'd771b19ef336ed8381def3a60b574464'

const discoverMovie = () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`
  // code here
  return axios.get(url)
  .then((response) =>{
  return response;
  })
}

const getMovieById = (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`
  // code here
  return axios.get(url)
  .then((result) =>{
  return result.data;
  })
}


const getMovieByIdFailure = () => {
  const fakeId = 1 // FAKE ID HERE
  const url = `https://api.themoviedb.org/3/movie/${fakeId}?api_key=${api_key}`
  // code here
  return axios.get(url)
  .then((response) =>{
    
  return response.status;
  })
  .catch((error)=>{
  return error.response.status;
  })
}




module.exports = {
  discoverMovie,
  getMovieById,
  getMovieByIdFailure
}



// function getPokemon1(){
//   fetch (url1).then(function(response){
//   return response.json();
//   })
//   .then (function(data){
  
//   let output = ` ` 
//   let output2 = ` `
  
  
//   var pokeID = data.order;
//   var pokeName = data.name.toUpperCase();
//   var pokeType1 = data.types[0].type.name.toUpperCase();
//   if (data.types.length == 2) {
//   var pokeType2 = data.types[1].type.name.toUpperCase();
//   }
//   else var pokeType2 = null;
//   var pwr = data.stats[4].base_stat;
  
  
//   output += `
//   <H1> Name: ${pokeName}</h1
//   <ul>
//   <li> Number: ${pokeID}</li>
//   <li> Move 1: ${pokeType1}</li>
//   <li> Move 2: ${ pokeType2}</li>
//   <li> Attack Power: ${pwr}</li>
//   </ul>
//   `;
  
//   output2 += `
//   <h1>${pwr}Name:<h1>
//   `;