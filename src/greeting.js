module.exports = {
  getScore,
  wonPoint,
};

const score = ["love", "15", "30", "40"];
let advOne = false;
let advTwo = false;
let winner 
let scorePlayerOne = 3;
let scorePlayerTwo = 3;

const playerOne = "PlayerOne";
const playerTwo = "PlayerTwo";

function getScore() {
  if (advOne == true) {
    return "Adv-1";
  } else if (advTwo == true) {
    return "Adv-2";
  } else if (scorePlayerOne == scorePlayerTwo && scorePlayerOne === 3) {
    return "Deuce";
  } else if (scorePlayerOne == scorePlayerTwo) {
    return `${score[scorePlayerOne]}-all`;
  } else {
    return `${score[scorePlayerOne]}-${score[scorePlayerTwo]}`;
  }
}

function wonPoint(player) {
  if (getScore() == "Deuce") {
    if (player == "playerOne") {
      advOne = true;
    } else {
      advTwo = true;
    }
  }
  if (getScore() == "Adv-1"){
    playerOne
  }

  if (player == "playerOne") {
    scorePlayerOne++;
  } else {
    scorePlayerTwo++;
  }
}
