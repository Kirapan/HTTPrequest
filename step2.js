function getAndPrintHTML () {

  var https = require("https");

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */
  var buffer = "";

  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');

    response.on('data',function (chunk) {

      buffer += chunk;
    });
    response.on('end', function() {
      console.log('Response stream complete.');
      console.log(buffer);
    });
  });
}

getAndPrintHTML();