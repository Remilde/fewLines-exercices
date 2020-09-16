const machine = {
  // Complete here
  litersOfCoffee: 0,
  fillWithLitersOfCoffee: function (litre){
    this.litersOfCoffee += litre;
  },
  expresso: function (){
    let tailleExpresso = 0.08;
    if(this.litersOfCoffee >= tailleExpresso){
      this.litersOfCoffee -= tailleExpresso;
      return true;
    }
    return false;
  },
  longCoffee: function (){
    let tailleLongCoffe = 0.15;
    if(this.litersOfCoffee >= tailleLongCoffe){
      this.litersOfCoffee -= tailleLongCoffe;
      return true;
    }
    return false;
  },
};

module.exports = machine;
