var https = require("https");

function getAndPrintHTML (options) {
  /* Add your code here */
  var buffer = "";

  https.get(options, function (response) {
    response.setEncoding('utf8');

    response.on('data',function (chunk) {

      buffer += chunk;
      console.log(buffer);
    });
  });
}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };

getAndPrintHTML(requestOptions);
