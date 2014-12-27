function Player(name) {
  this.name = name;
};

Player.prototype.picks = function(pick) {
  this.pick = pick;
};

Game.prototype.random_pick = function () {
  var picks, computer_choice;
  picks = (Object.keys(this.defeat));
  computer_choice = picks[Math.floor(Math.random() * picks.length)];
};

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
};

Game.prototype.defeat = {
 'rock': ['scissors', 'lizard'],
 'paper': ['rock', 'spock'],
 'scissors': ['paper', 'lizard'],
 'lizard': ['paper', 'spock'],
 'spock': ['scissors', 'rock']
};


Game.prototype.winner = function() {


  if (this.player1.pick == this.player2.pick) return null

    array = this.defeat[this.player1.pick]

    for (var i in array) {

      if(array[i] === this.player2.pick){return this.player1}

    }

  return this.player2

};
