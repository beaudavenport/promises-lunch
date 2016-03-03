var successRequest = require('./server/successRequest');

//BROKEN PROMISE FIVE - Using a named function as a callback but forgetting about the arguments

function doDefaultStuffUnlessIReceiveArguments(arg) {
  if (arguments.length === 0) {
    console.log("I received no args. Default behaviour will be performed.");
  } else {
    console.log("I received: \n", arg, "\n\n now I will do something different.");
  }
}
doDefaultStuffUnlessIReceiveArguments();

successRequest.then(doDefaultStuffUnlessIReceiveArguments);

// FIXED

// successRequest.then(function(data) {
//   doDefaultStuffUnlessIReceiveArguments();
// });