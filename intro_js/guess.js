var guess = Number(prompt('guess a number: '));
var num = 23;

if(guess === num){
  alert('You guessed it!');
} else if(guess > num){
  alert('Too high, guess again!');
} else {
  alert('Too low, guess again!');
}
