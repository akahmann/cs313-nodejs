function getCpuChoice() {
   // Use a random object to make a selection for the cpu
   // then return it

   return 'rock';
}

function playGame(req, res) {
   console.log('Playing the game from a different file...');

   var player = req.query.player_choice;
   console.log('The player choice is: ' + player);

   var cpu = getCpuChoice()

   var stuff = {player: player, cpu: cpu};

   res.render('results', stuff);
}

module.exports = {playGame: playGame};

// function calculate(req, res) {
//    var url_parts = url.parse(req.url, true);
//    var query = url_parts.query;
//    var weight = +query.weight;
//    var typeOfMail = query.typeOfMail;

//    if(typeOfMail == "Large Envelopes(Flats)") {
//       var price = 1.00;
//       for(var i = 0; i < weight - 1; i++) {
//          price += 0.21;
//       }
//    }

//    if(typeOfMail == "Letters(stamped)") {
//       var price = 0.5;
//       for(var i = 0; i < weight - 1; i++) {
//          price += 0.21;
//       }
//       if(weight > 3.5) {
//          price = 1.13;
//       }
//    }

//    if(typeOfMail == "Letters(metered)") {
//       var price = 0.47;
//       for(var i = 0; i < weight - 1; i++) {
//             price += 0.21;
//          }
//       if(weight > 3.5) {
//          price = 1.10;
//       }
//    }

//    if(typeOfMail == "First-Class Package Service--Retail") {
//       var price = 3.5;
//       if(weight > 4) {
//          price = 3.75;
//       }
//       if(weight > 8) {
//          price = 4.10;
//          for(var i = 8; i < weight - 1; i++) {
//             price += .35;
//          }
//       }
//    }

//    res.render("formResponse", {price:price,typeOfMail:typeOfMail,weight:weight});
// }