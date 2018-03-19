var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};
var code = {a : '4', e : '3', l : '1', o : '0', s : '5', t : '7', 'ck' : 'x', 'er' : '0r', 'you' : 'j00'};

function Code1337 (html) {
  /* Write your code here! */
  for (var key in code) {
    console.log(html.replace(/'&{key}'/,code[key]));
  }
}

getHTML(requestOptions, Code1337);