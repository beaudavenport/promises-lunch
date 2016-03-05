var successRequest = require('./server/successRequest');
var longSuccessRequest = require('./server/longSuccessRequest');
var failureRequest = require('./server/failureRequest');


// BROKEN PROMISE EIGHT - A chain without a catch

successRequest.then(function(data) {
  console.log("Step one- got the data: \n", data);
  return failureRequest;
}).then(function(failureData) {
  console.log("Step two- got the failure data: \n", failureData);
  return longSuccessRequest;
}).then(function(longData) {
  console.log("Step three- got the long data: \n", longData);
});


// var stepOne = successRequest.then(function(data) {
//   console.log("Step one- got the data: \n", data);
//   // Promise returned by step one takes on the state of failureRequest
//   return failureRequest;
// });
//
// // Calling to stepOne.then WILL return a promise, but it will be in the same state
// // as failureRequest. The .then success callbacks won't be called.
//
// var stepTwo = stepOne.then(function(failureData) {
//   console.log("Step two- got the failure data: \n", failureData);
//   return longSuccessRequest;
// }).then(function(longData) {
//   console.log("Step three- got the long data: \n", longData);
// });
//
// // stepTwo.catch will return the promise in the failure state, but the callback WILL be called, returning a new value,
// // and allowing a new chain to begin.
//
// var stepThree = stepTwo.catch(function(error) {
//   console.log("And this one threw an error: \n", error);
//   return error;
// }).then(function(errorData) {
//   console.log("the chain restarts: \n", errorData);
// });