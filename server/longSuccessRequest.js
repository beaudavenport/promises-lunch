var request = require('request');
var Promise = require('promise');

var promise = new Promise(function(resolve, reject) {
  console.log('\n\nLong success promise instantiated. Waiting resolve or reject to be called...\n\n');
  console.log('');
  request('http://localhost:3000/long', function(err, res, body) {
    if (!err && res.statusCode == 200) {
      resolve(body);
    } else {
      reject(body);
    }
  });
});

module.exports = promise;