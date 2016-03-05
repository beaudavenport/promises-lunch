var successRequest = require('./server/successRequest');
var longSuccessRequest = require('./server/longSuccessRequest');

// BROKEN PROMISE NINE - How do I pass along my data?

successRequest.then(function(data) {
  console.log("Step one- got the data: \n", data);
  return longSuccessRequest;
}).then(function(longData) {
  console.log("Step two- got the long data: \n", longData);
  return longData;
}).then(function(longData) {
  console.log("Step three- I need my original data!!", longData);
});

// FIXED - VARIABLES OUTSIDE CALLBACK SCOPE

// var theData;
// var theLongData;
//
// successRequest.then(function(data) {
//   console.log("Step one- got the data: \n", data);
//   theData = data;
//   return longSuccessRequest;
// }).then(function(longData) {
//   console.log("Step two- got the long data: \n", longData);
//   theLongData = longData;
//   return longData;
// }).then(function(longData) {
//   console.log("Step three- I got my original data: \n", theData);
//   console.log("I got my longData too: \n", longData);
//   console.log("And as a variable: \n", theLongData);
// });

// FIXED - RESULT HASH

// var promiseResults = {};
//
// successRequest.then(function(data) {
//   console.log("Step one- got the data: \n", data);
//   promiseResults.data = data;
//   return longSuccessRequest;
// }).then(function(longData) {
//   console.log("Step two- got the long data: \n", longData);
//   promiseResults.longData = longData;
//   return promiseResults;
// }).then(function(promiseResultsData) {
//   console.log("Step three- All my data is here now: \n", promiseResultsData);
// });