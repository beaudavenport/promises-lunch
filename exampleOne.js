var successRequest = require('./server/successRequest');

successRequest.then(function(data) {
  console.log("got the stuff: \n", data);
  console.log('\n');
});