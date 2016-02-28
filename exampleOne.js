var successRequest = require('./successRequest');

successRequest.then(function(data) {
  console.log("got the stuff: \n", data);
  console.log('\n');
});