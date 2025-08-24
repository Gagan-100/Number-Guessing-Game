let randomNumber = parseInt(Math.random()*100+1);
const submit = document.querySelector('#submit');
const userInput = document.querySelector('#enter_num')
const prevGuess = document.querySelector('.previous')
const remainGuess = document.querySelector('.remaining');
const lowOrhigh = document.querySelector('.lowOrHigh');
const guessDiv = document.querySelector('.guess_div');

const p = document.createElement('p');


let prevGuesses = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);

    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter a valid number')
    }
    else if(guess<0){
        alert('please enter a number between 1 to 100')
    }
    else if(guess>100){
        alert('please enter a number between 1 to 100')

    }
    else{
        prevGuesses.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over 😞. Random number was ${randomNumber}` , "gameover");
            endGame();
        }
        else if(guess === randomNumber){
            displayMessage(`You Won 🎉, You guessed it right 🏆!`,"win");
            endGame();
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}

function checkGuess(guess){

     if(guess<randomNumber){
        displayMessage(`Enter a larger number`,"info")
    }
    else if(guess>randomNumber){
        displayMessage(`Enter a smaller number`,"info")
    }


}

function displayGuess(guess){
    userInput.value = '';
    prevGuess.innerHTML += `${guess},  `;
    numGuess++;
    remainGuess.innerHTML = `${11-numGuess}`

}

function displayMessage(message,type = "info"){
    if(type === "info"){
        lowOrhigh.innerHTML = `<h2 class = info_message> ${message}  </h2> `
    }
    else if(type === "gameover"){
         lowOrhigh.innerHTML = `<h2 class="gameover_msg"> ${message} </h2> `;

    }
    else if(type === "win"){
        lowOrhigh.innerHTML = `<h2 class  = "win_msg"> ${message}   </h2>`;
    }
   


}

function endGame(guess){
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id = "newGame"> Start New Game </h2> `;
    guessDiv.appendChild(p);
    playGame = false;
    newGame();

}

function newGame(guess){
    const newGameButton =  document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random()*100+1);
    prevGuesses = [];
    numGuess = 1;
    prevGuess.innerHTML = '';
    remainGuess.innerHTML = `${11-numGuess}`;
    userInput.removeAttribute('disabled');
    guessDiv.removeChild(p);
    lowOrhigh.innerHTML = '';
    playGame = true;
  })


}