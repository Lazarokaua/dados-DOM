
var randomNumber1 = Math.floor(Math.random() * 6) + 1
console.log(randomNumber1)

function escolha() {
    if (randomNumber1 === 1) {
        document.querySelector('.img1').setAttribute('src', 'images/dice1.png');
    } else if (randomNumber1 === 2) {
        document.querySelector('.img1').setAttribute('src', 'images/dice2.png');
    } else if (randomNumber1 === 3) {
        document.querySelector('.img1').setAttribute('src', 'images/dice3.png');
    } else if (randomNumber1 === 4) {
        document.querySelector('.img1').setAttribute('src', 'images/dice4.png');
    } else if (randomNumber1 === 5) {
        document.querySelector('.img1').setAttribute('src', 'images/dice5.png');
    } else if (randomNumber1 === 6) {
        document.querySelector('.img1').setAttribute('src', 'images/dice6.png');
    } else {
        return ''
    }
};

escolha();

var randomNumber2 = Math.floor(Math.random() * 6) + 1
console.log(randomNumber2)

function escolhaRight() {
    if (randomNumber2 === 1) {
        document.querySelector('.img2').setAttribute('src', 'images/dice1.png');
    } else if (randomNumber2 === 2) {
        document.querySelector('.img2').setAttribute('src', 'images/dice2.png');
    } else if (randomNumber2 === 3) {
        document.querySelector('.img2').setAttribute('src', 'images/dice3.png');
    } else if (randomNumber2 === 4) {
        document.querySelector('.img2').setAttribute('src', 'images/dice4.png');
    } else if (randomNumber2 === 5) {
        document.querySelector('.img2').setAttribute('src', 'images/dice5.png');
    } else if (randomNumber2 === 6) {
        document.querySelector('.img2').setAttribute('src', 'images/dice6.png');
    } else {
        return ''
    }
};

escolhaRight();


// ganhador

function situacao() {
    if (randomNumber1 === randomNumber2){
        return document.querySelector('#titulo').innerHTML = 'Draw!';
    } else if(randomNumber1 > randomNumber2){
        return document.querySelector('#titulo').innerHTML = 'Player 1 Wins!';
    } else{
        return document.querySelector('#titulo').innerHTML = 'Player 2 Wins!';
    }

}

situacao();


function btnClicado(){
    location.reload();
}