var http = require('http');
var dispatcher = require('httpdispatcher');

function handleRequest(req, res) {
  try {
    dispatcher.dispatch(req, res);
  } catch (err) {
    console.log(err);
  }
}

dispatcher.onGet('/success', function(req, res) {
  setTimeout(function() {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    res.end(JSON.stringify({
      foo: 'foo'
    }));
  }, 2500);
});

dispatcher.onGet('/long', function(req, res) {
  setTimeout(function() {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    res.end(JSON.stringify({
      long: 'long'
    }));
  }, 3500);
});

dispatcher.onGet('/failure', function(req, res) {
  setTimeout(function() {
    res.writeHead(400, {
      'Content-Type': 'application/json'
    });
    res.end(JSON.stringify({
      error: 'error'
    }));
  }, 2500);
});

var server = http.createServer(handleRequest);

server.listen(3000, function() {
  console.log('Listening on http://localhost:3000');
});