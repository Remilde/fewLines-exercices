//const readline = require("readline");
const clear = require("./clear");
/*const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})*/
const taille = 8;
const symbols = {
  tree: "🌳",
  ghost: "👻",
  tooth: "🦷",
  fish: "🐟",
  imp: "😈",
  robot: "🤖",
  invader: "👾",
  apple: "🍏",
  car: "🚗",
  cold: "🥶",
  peach: "🍑",
  boom: "💥",
  bomb: "💣",
  boot: "👢",
  pumkin: "🎃",
  fox: "🦊",
  rabbit: "🐇",
  kiss: "💋",
  salad: "🥗",
  clown: "🤡",
};
const symbolArray = [];
const playArray = [];
const errArray = [];
for (const key in symbols) {
  symbolArray.push(key);
}
function isInerrArray(number) {
  errArray.includes //
  let result = false;
  errArray.forEach((element) => {
    if(number === element) {
      result = true;
    }
    console.log("number :" + number + "       Element  "+ element);
  });
  return result;
} 
function createBoard() {
  let randNumber;
  for(let i=0; i < taille ; i++){
    randNumber = parseInt((Math.random()*taille));
    console.log(isInerrArray(randNumber));
    if(isInerrArray(randNumber)){
      console.log("i2 = "+i);
      i--;
    }
    else {
      playArray.push([symbolArray[randNumber]]);
      errArray.push(i);
    }
  }  
}
createBoard();
console.log(errArray);
//console.log(symbols[symbolArray[0]]);

