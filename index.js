const express = require('express');

var calc = require('./asn09/calc.js');

var app = express();

app.set('port', process.env.PORT || 5000)
  .use(express.static(__dirname + '/asn09'))
  .set('views', __dirname + '/asn09/views')
  .set('view engine', 'ejs')
  .get('/results', calc.playGame) //TODO: update playGame to function name
  .listen(app.get('port'), function() {
   console.log('Listening on port: ' + app.get('port'));
  });