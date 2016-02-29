var successRequest = require('./server/successRequest');

//BROKEN PROMISE THREE - chaining without returning a value

var myData = successRequest.then(function(data) {
  console.log("got the stuff: \n", data);
  console.log('\n');
}).then(function(data) {
  console.log('should be the same data passed along: \n', data);
});

//FIXED

// var myData = successRequest.then(function(data) {
//   console.log("got the stuff: \n", data);
//   console.log('\n');
//   return data;
// }).then(function(data) {
//   console.log('should be the same data passed along: \n', data);
// });