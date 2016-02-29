var successRequest = require('./server/successRequest');

// BROKEN PROMISE TWO - Unexpected return value

var myData = successRequest.then(function(data) {
  console.log("got the stuff: \n", data);
  console.log('\n');
  return data;
});

console.log(myData);

setTimeout(function() {
  console.log(myData);
}, 5000);

//FIXED

// var myData = successRequest.then(function(data) {
//   console.log("got the stuff: \n", data);
//   console.log('\n');
//   return data;
// });
//
// myData.then(function(data) {
//   console.log('should be the same data passed along: \n', data);
// });