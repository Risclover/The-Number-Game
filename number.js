/* Write a guessing game where the user has to guess a secret number. After every guess the program tells the user whether their number was too large or too small. At the end the number of tries needed should be printed. It counts only as one try if they input the same number multiple times consecutively. */

const number = Math.floor(Math.random() * 100);
const guess = document.querySelector('#input');
const submit = document.getElementById('submit');
const result = document.getElementById('results');
const counting = document.getElementById('counting');
const user = document.getElementById('user');
const user2 = document.getElementById('user2');
const background = document.getElementById('main');
const reset = document.getElementById('reset');
let guesses = [];
let counter = 0;
let unique = [];

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

  // Get the input field
// Execute a function when the user releases a key on the keyboard
guess.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.code === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    submit.click();
  }
});

document.addEventListener("keydown", function(e){
    if(e.shiftKey && e.key === "R") {
      reset.click();
    } 
 });
 

function playRound() {
    let userGuess = guess.value;
    let newNum;
    let allSpans;
    let slash = document.createElement('span');
    slash.innerText = ' / ';
    if(userGuess === )
    if (userGuess < number && userGuess > 0) {
        guesses.push(userGuess);
        result.classList.remove('high');
        result.classList.remove('error');
        result.textContent = "Your guess was too low! Try again."
        result.classList.add('low');
        newNum = document.createElement('span');
        newNum.classList.add('low');
        newNum.innerText = guess.value + ' ';
        user2.appendChild(newNum);
        user2.appendChild(slash);
        background.classList.remove('regback');
        background.classList.remove('highback');
        background.classList.remove('errorback')
        background.classList.add('lowback');
        submit.classList.remove('btnbackerror');
        reset.classList.remove('btnbackerror');
        submit.classList.remove('btnbackhigh');
        reset.classList.remove('btnbackhigh');
        submit.classList.add('btnbacklow');
        reset.classList.add('btnbacklow');

    } else if (userGuess > number && userGuess >= 0 && userGuess < 101) {
        guesses.push(userGuess);
        result.classList.remove('low');
        result.classList.remove('error');
        result.textContent = "Your guess was too high! Try again.";
        result.classList.add('high');
        newNum = document.createElement('span');
        newNum.classList.add('high');
        newNum.innerText = guess.value + ' ';
        user2.appendChild(newNum);
        user2.appendChild(slash);
        background.classList.remove('regback');
        background.classList.remove('lowback');
        background.classList.remove('errorback');
        background.classList.add('highback');
        submit.classList.remove('btnbackerror');
        reset.classList.remove('btnbackerror');
        submit.classList.remove('btnbacklow');
        reset.classList.remove('btnbacklow');
        submit.classList.add('btnbackhigh');
        reset.classList.add('btnbackhigh');

    } else if (userGuess == number) {
        guesses.push(userGuess);
        result.classList.remove('low', 'high');
        result.classList.add('green');
        result.textContent = "You win!";
        allSpans = document.querySelectorAll('span');
        allSpans.forEach(allSpan => {
            allSpan.classList.remove('low', 'high');
        })
        user2.textContent += guess.value;
        user2.classList.add('green');
        guess.disabled = "true";
        background.classList.remove('regback');
        background.classList.remove('errorback');
        background.classList.remove('lowback');
        background.classList.remove('highback');
        background.classList.add('winback');
        submit.classList.remove('btnbackerror');
        reset.classList.remove('btnbackerror');
        submit.classList.remove('btnbacklow');
        reset.classList.remove('btnbacklow');
        submit.classList.remove('btnbackhigh');
        reset.classList.remove('btnbackhigh');
        submit.classList.add('btnbackwin');
        reset.classList.add('btnbackwin');
    } else if (userGuess < 0 || userGuess > 100 || userGuess === '' || userGuess != (/\d+/ig) || userGuess.value.length === 0) {
        result.textContent = "Please enter a number from 0 - 100."
        result.classList.add('error');
        result.classList.remove('low');
        result.classList.remove('high');
        background.classList.remove('regback');
        background.classList.remove('lowback');
        background.classList.remove('highback');
        background.classList.add('errorback');
        submit.classList.remove('btnbacklow');
        submit.classList.remove('btnbackhigh');
        submit.classList.remove('submit');
        submit.classList.add('btnbackerror');
        reset.classList.remove('btnbacklow');
        reset.classList.remove('btnbackhigh');
        reset.classList.remove('reset');
        reset.classList.add('btnbackerror');

    }

    unique = guesses.filter(onlyUnique);

    counting.textContent = "Guesses: " + unique.length;

    user.appendChild(user2);
    userGuess = '';
    guess.value = '';
}


function refreshPage() {
    if (guess.disabled) {
        location.reload();
    } else {
        if (confirm("Are you sure that you want to reset the game?")) {
            location.reload();
        } 
    }
}