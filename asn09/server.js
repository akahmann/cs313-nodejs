const express = require('express');

var calc = require('./calc.js');

var app = express();

app.set('port', process.env.PORT || 5000)
  .use(express.static(__dirname + '/public'))
  .set('views', __dirname + '/views')
  .set('view engine', 'ejs')
  .get('/calc', calc.playGame) //TODO: update playGame to function name
  .listen(app.get('port'), function() {
   console.log('Listening on port: ' + app.get('port'));
  });