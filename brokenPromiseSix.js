var successRequest = require('./server/successRequest');
var longSuccessRequest = require('./server/longSuccessRequest');

// BROKEN PROMISE SIX - calling a new promise in a callback but forgetting to return it

successRequest.then(function(data) {
  console.log('Got the data for the first request: \n', data);
  longSuccessRequest.then(function(longData) {
    console.log('Should be the data from the long request : \n', longData);
  });
}).then(function(longData) {
  console.log('This is the long data again: \n', longData);
});

// successRequest.then(function(data) {
//   console.log('Got the data for the first request: \n', data);
//   return longSuccessRequest;
// }).then(function(longData) {
//   console.log('Should be the data from the long request : \n', longData);
//   return longData;
// }).then(function(longData) {
//   console.log('This is the long data again: \n', longData);
// });