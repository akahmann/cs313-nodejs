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