module.exports = {
    getScore,
    wonPoint
}

const score = ['love','15','30','40']
let scorePlayerOne = 0
let scorePlayerTwo = 1

const playerOne = "player1"
const playerTwo = "player2"

function getScore () {
if(scorePlayerOne==scorePlayerTwo && scorePlayerOne===3){
    return 'Deuce';
} else if(scorePlayerOne==scorePlayerTwo){
    return `${score[scorePlayerOne]}-all`
}else{
    return `${score[scorePlayerOne]}-${score[scorePlayerTwo]}`
}
};

function wonPoint (player) {
    if(player == "player1"){
        scorePlayerOne++
    } else {
        scorePlayerTwo++
    }
}
