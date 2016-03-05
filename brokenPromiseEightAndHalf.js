var successRequest = require('./server/successRequest');
var longSuccessRequest = require('./server/longSuccessRequest');
var failureRequest = require('./server/failureRequest');


// BROKEN PROMISE 8.5 - A chain with a throw without a catch

successRequest.then(function(data) {
  console.log("Step one- got the data: \n", data);
  return longSuccessRequest;
}).then(function(longData) {
  console.log("Step two- got the long data: \n", longData);
  throw new Error('Something went wrong');
}).then(function(someData) {
  console.log("Step three- got some data: \n", someData);
});



// var stepOne = successRequest.then(function(data) {
//   console.log("Step one- got the data: \n", data);
//   // Promise returned by step one takes on the state of longSuccessRequest
//   return longSuccessRequest;
// });
//
// // Calling to stepOne.then will return a promise with the longSuccessRequest state, and the callback will execute
//
// var stepTwo = stepOne.then(function(longData) {
//   console.log("Step two- got the long data: \n", longData);
//   throw new Error('Something went wrong');
// }).then(function(longData) {
//   console.log("Step three- got the long data: \n", longData);
// });
//
// // stepTwo.catch will return the promise in the failure state, but the callback WILL be called with the thrown error,
// // which could even be passed along with a new chain
//
// var stepThree = stepTwo.catch(function(error) {
//   console.log("And this one threw an error: \n", error);
//   return error;
// }).then(function(errorData) {
//   console.log("the chain restarts: \n", errorData);
// });