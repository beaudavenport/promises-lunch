var successRequest = require('./server/successRequest');
var longSuccessRequest = require('./server/longSuccessRequest');
var failureRequest = require('./server/failureRequest');

// BROKEN PROMISE SEVEN - THE PYRAMID OF DOOM

successRequest.then(function(data) {
  console.log("Step one- got the data: \n", data);
  longSuccessRequest.then(function(longData) {
    console.log("Step two- got the long data: \n", longData);
    failureRequest.catch(function(error) {
      console.log("And this one threw an error: \n", error);
    });
  });
});

// successRequest.then(function(data) {
//   console.log("Step one- got the data: \n", data);
//   return longSuccessRequest;
// }).then(function(longData) {
//   console.log("Step two- got the long data: \n", longData);
//   return failureRequest;
// }).catch(function(error) {
//   console.log("And this one threw an error: \n", error);
// });