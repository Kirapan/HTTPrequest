var https = require ('https');

module.exports = function getHTML (options, callback) {

  /* Add your code here */
  var buffer = "";
  https.get(options, (res) => {
    res.setEncoding('utf8');
    var statusCode = res.statusCode;
    console.log("Response status code:", statusCode);

    if (statusCode !== 200) {
      console.log("Error");
      return;
    }

    res.on('data', function(chunk) {
      buffer += chunk;
      //console.log(buffer);
    });
    //callback(buffer);
    res.on('end', function() {
      callback(buffer);
    });
  });

};

function printHTML (html) {
  console.log(html);
}