const readline = require("readline");
const { clear } = require("console");
const { COPYFILE_FICLONE_FORCE } = require("constants");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const score1 = 0;
const score2 = 0;
const tabMoves = {
  fuck: [
    "    ________        ",
    "---'   _ , |        ",
    "      (__(_)_____   ",
    "      (__________)  ",
    "      (____)        ",
    "---.__(___)         ",
  ],
  paper: [
    "      _______       ",
    "----'    ____)____  ",
    "            _______)",
    "            _______)",
    "           _______) ",
    "----.__________)    ",
  ],
  scissors: [
    "    _________      ",
    "---'    _____)     ",
    "     (__)          ",
    "     (__)________  ",
    "     (__)________) ",
    "---.__(__________) ",
  ],
};
clear();
console.log("Welcome to ShiFuckMi");
const reverseLine = (line) => {
  const changedLine = line
    .split("")
    .map((char) => {
      if (char === "(") return ")";
      else if (char === ")") return "(";
      return char;
    })
    .join("");
  return changedLine.split("").reverse().join("");
};
function generateIa() {
  const aiIndex = Math.floor(Math.random() * 3);
  const aiMoves = Object.keys(tabMoves)[aiIndex];
  return aiMoves;
}
function quiGagne(move1, move2) {
  const signe1 = Object.keys(tabMoves)[0];
  const signe2 = Object.keys(tabMoves)[1];
  const signe3 = Object.keys(tabMoves)[2];
  if (move1 === move2) return 0;
  if (move1 === signe1) {
    if (move2 === signe2) return 2;
    if (move2 === signe3) return 1;
  }
  if (move1 === signe2) {
    if (move2 === signe1) return 1;
    if (move2 === signe3) return 2;
  }
  if (move1 === signe3) {
    if (move2 === signe2) return 1;
    if (move2 === signe1) return 2;
  }
}
function menu() {
  reader.question("Voulez vous jouer : \n 1 - Seul \n 2 - A plusieur \n 3 - quitter\n", (input) => {
    if (input == 3) {
      reader.close();
    } else if (isNaN(input) || input > 3 || input < 1) {
      console.log("entre 1 et 3 connard");
      menu();
    } else if (input == 1) {
      clear();
      poseQuestion(false);
    } else if (input == 2) {
      clear();
      poseQuestion(true);
    }
  });
}
function rejoue(secondPlayerIsHere) {
  reader.question("Voulez vous faire une autre partie ? (Y,n)\n", (input) => {
    if (input.toLowerCase() === "y") poseQuestion(secondPlayerIsHere);
    else if (input.toLowerCase() === "n") menu();
    else {
      console.log('ENTRE : "Y" ou "N"');
      clear();
      rejoue(secondPlayerIsHere);
    }
  });
}
function ask2ndPlayer(move) {
  clear();
  Object.keys(tabMoves).forEach((name, i) => {
    console.log(`${i + 1} - ${name}`);
  });
  reader.question("2nd player JOUE, LE PREMIER CACHE SES YEUX\n", (input) => {
    if (isNaN(input) || input > 3 || input < 1) {
      console.log("entre 1 et 4 connard");
      ask2ndPlayer();
    } else if (!isNaN(input) || input <= 3 || input >= 1) {
      const index2 = parseInt(input - 1);
      const move2 = Object.keys(tabMoves)[index2];
      clear();
      console.log("PLAYER 1 :\n" + tabMoves[move].join("\n") + "\n\n");
      console.log("PLAYER 2 :\n" + tabMoves[move2].join("\n") + "\n\n");
      if (quiGagne(move, move2) === 0) {
        console.log("EGALITE");
        rejoue(true);
      } else if (quiGagne(move, move2) === 1) {
        console.log("JOUEUR UN GAGNE");
        rejoue(true);
      } else {
        console.log("JOUEUR DEUX GAGNE");
        rejoue(true);
      }
    } else ask2ndPlayer(move);
  });
}
function poseQuestion(secondPlayerIsHere) {
  if (secondPlayerIsHere) {
    console.log("LE JOUEUR 1 DOIT CACHER SES YEUX LE TEMPS QUE LE PREMIER ENTRE SON SIGNE : \n\n");
  }
  Object.keys(tabMoves).forEach((name, i) => {
    console.log(`${i + 1} - ${name}`);
  });
  console.log("4 - Retour au menu");
  reader.question("Please choose a move\n> ", (input) => {
    if (input == 4) {
      menu();
    } else if (isNaN(input) || input > 3 || input < 1) {
      console.log("entre 1 et 4 connard");
      poseQuestion(secondPlayerIsHere);
    } else if (!isNaN(input) || input <= 3 || input >= 1) {
      const index = parseInt(input - 1);
      const move = Object.keys(tabMoves)[index];
      const playerSymbol = tabMoves[move].join("\n");
      if (!secondPlayerIsHere) {
        const aiMove = generateIa();
        const aiSymbol = tabMoves[aiMove].map(reverseLine).join("\n");
        clear();
        console.log(`PLAYER : \n${playerSymbol}`);
        console.log(`AI : \n${aiSymbol}`);
        if (quiGagne(move, aiMove) === 0) console.log("Egalité");
        else if (quiGagne(move, aiMove) === 1) console.log("Joueur gagne");
        else console.log("Joueur perd");
        console.log("\n\n\n\n\n");
        rejoue(false);
      } else {
        ask2ndPlayer(move);
      }
    }
  });
}
menu();
//reader.close();
