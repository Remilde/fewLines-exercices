function numberGame(reader, min = 1, max = 100) {
  // console.log(reader);
  const condition = true;
  const randomNumber = (min, max) => Math.round(Math.random()*(max-min)+min);
  const mysteryNumber = randomNumber(min,max);
  console.log("RANDOM NUMBER:"+ mysteryNumber);
  let i=0;
  const getNumber = (text) => {
    reader.question(text, (userNumber) => {
      if(isNaN(userNumber)) {
        //console.log("Un nombre gogole");
        getNumber(); 
      }
      else if(userNumber > max || userNumber < min) {
        //console.log("out of range number");
        getNumber("The number is between 1 and 100\n");
      }
      else if(userNumber < mysteryNumber){
        //console.log("too low");
        i++;
        getNumber("too low\n");
      }
      else if(userNumber > mysteryNumber){
        i++;
        getNumber("too high\n");
      }
      else {
        i++;
        console.log("You won!");
        console.log("with : " + i + " try");
        reader.close();
      }
    });
  };
  getNumber("Enter a number\n");
  //console.log(getNumber());  
};

module.exports = numberGame;

