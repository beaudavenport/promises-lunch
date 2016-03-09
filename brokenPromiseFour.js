var failureRequest = require('./server/failureRequest');

//BROKEN PROMISE FOUR - forgetting to provide a failure callback (or .catch)

failureRequest.then(function(error) {
  console.log('Should be an error: ', error);
});

// failureRequest.then(null, function(error) {
//   console.log('Should be an error: ', error);
// });

// OR

// failureRequest.catch(function(error) {
//   console.log('Should be an error: ', error);
// });