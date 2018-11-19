const express = require('express');

//var calc = require('/asn09/calc.js');
const path = require('path');
var url = require('url');

var app = express();

app.set('port', process.env.PORT || 5000)
  .use(express.static(__dirname + '/asn09'))
  .set('views', __dirname + '/asn09/views')
  .set('view engine', 'ejs')
  .get("/results", function(req,res)
   {
      var url_parts = url.parse(req.url, true);
      var query = url_parts.query;
      var weight = +query.weight;
      var letters = query.letters;

      if(letters == "Letters Envelopes (Flats)") {
         var price = 1.00;
         for(var i = 0; i < weight - 1; i++) {
            price += 0.21;
         }
      }
      if(letters == "Letters (Stamped)") {
         var price = 0.5;
         for(var i = 0; i < weight - 1; i++) {
            price += 0.21;
         }
         if(weight > 3.5) {
            price = 1.13;
         }
      }
      if(letters == "Letters (Metered)") {
         var price = 0.47;
         for(var i = 0; i < weight - 1; i++) {
            price += 0.21;
         }
         if(weight > 3.5) {
            price = 1.10;
         }
      }
      if(letters == "First-Class Package Service - Retail") {
         var price = 3.5;
         if(weight > 4) {
            price = 3.75;
         }
         if(weight > 8) {
            price = 4.10;
            for(var i = 8; i < weight - 1; i++) {
               price += .35;
            }
         }
      }
      res.render("results", {price:price, letters:letters, weight:weight});
   })
  //.get('/results', calc.calculate) //fix this later
  .listen(app.get('port'), function() {
   console.log('Listening on port: ' + app.get('port'));
  });