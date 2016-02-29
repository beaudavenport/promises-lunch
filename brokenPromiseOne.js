var successRequest = require('./server/successRequest');

// BROKEN PROMISE ONE - Assumed Synchronicity

var myResult;

successRequest.then(function(data) {
  console.log("got the stuff: \n", data, "\n");
  myResult = data;
});

console.log("I expect this to be data:", myResult);

// FIXED

// var myResult;
//
// successRequest.then(function(data) {
//   console.log("got the stuff: \n", data, "\n");
//   myResult = data;
//   console.log("I expect this to be data:", myResult);
// });