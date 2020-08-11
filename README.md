## Setup

Initialize and run the app: `npm install && npm start`.

## Overview

You should see some Jest tests. The goal of this exercise is to make all of the tests pass. Feel free to look at the tests folder and examine the logic of the tests. It's ok if you don't understand all of this logic right now.

Also, please note that the urls for all of the axios calls have been provided for you but you will need to `require axios` at the top of the `src/index.js` file to get everything working.

Let's complete the following functions:


## discoverMovie

* The initial call will be made by typing `axios(url)`

* Axios is a promise (like fetch) so use the `.then` function to log the result

* Take a look in your console and examine what was returned

* When complete, go back and simply `return` the original axios call to make the test pass


## getMovieById

* Looking at the result from the last function, you should have seen a lot of properties/data. A lot of that data is not useful to our application.

* We will return the result similar to the last function but this time append `.then` and just return `result.data`

* The movie title should have been "Reservoir Dogs"


## getMovieByIdFailure

* Look at the `fakeId` on the first line of this function and notice the comment "FAKE ID HERE". Replace the number 1 with the number `5783`

* This call is designed to fail because the movie id 5783 doesn't exist. When axios encounters a status code above 301 it automatically throws an error so in this function we will need `then` AND `catch` statements

* Start with `return axios(url)` like usual

* Then use the `.then` statement to return the `status` of the `response` (if successful)

* Then use the `.catch` statement which always starts with the parameter `error`. Return the `status` of the `response` of the `error` (error.response.status)

* If successful, the test will have passed after receiving a `404` status code


## Final thoughts

Hopefully this exercise has given you some insight into using `axios`. We should have seen multiple responses and interacted with the different parts of the response object (data, status, etc). We will continue to use axios in the future as we work with (and build our own) APIs