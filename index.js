let minNumber=1;
let maxNuumber=10;
let running=true;
let Guess;
let attemps=0;
let randomNumber=Math.floor(Math.random()*(maxNuumber-minNumber))+minNumber;

while(running){
  Guess=window.prompt(`Guess a number between ${minNumber}- ${maxNuumber}`);
  Guess=Number(Guess);
  if(Guess < minNumber || Guess>maxNuumber){
    window.alert("Invalid Input !");
  }
  else if(Guess>randomNumber){
    window.alert("You are guessing too high !");
  }
  else if(Guess< randomNumber){
    window.alert("You are guessing too low !");
  }
  else{ 
  window.alert(`You Guessed the number correctly ! and you took ${attemps} attempts`);
  running=false 
  }
  attemps++;

}
