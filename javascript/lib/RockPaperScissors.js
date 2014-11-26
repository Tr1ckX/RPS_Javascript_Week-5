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

Game.prototype.verbs = function () { 
        var verb_hash = {};
        verb_hash[['spock','rock']] = 'vaporises';     
        verb_hash[['spock','scissors']] = 'smashes';
        verb_hash[['rock','scissors']] = 'smashes';
        verb_hash[['rock','lizard']] = 'crushes';
        verb_hash[['scissors','paper']] = 'cuts';
        verb_hash[['scissors','lizard']] = 'decapitates';
        verb_hash[['lizard','spock']] = 'poisons';
        verb_hash[['lizard','paper']] = 'eats';
        verb_hash[['paper','spock']] = 'disproves';
        verb_hash[['paper','rock']] = 'wraps';
        //
        return verb_hash;
   
      };

Game.prototype.winner = function() {


  if (this.player1.pick == this.player2.pick) return null

    array = this.defeat[this.player1.pick]

    for (var i in array) {

      if(array[i] === this.player2.pick){return this.player1}

    }

  console.log (this.player2.pick + ' ' + this.verbs()[[this.player2.pick,this.player1.pick]] + ' '  + this.player1.pick);
  return this.player2


};
