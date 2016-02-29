var failureRequest = require('./server/failureRequest');

failureRequest.catch(function(data) {
  console.log("didn't get the stuff: \n", data);
  console.log('\n');
});