function rockPaperScissors(text){

  const rock = "Rock";
  const paper = "Paper";
  const scissors = "Scissors";

   let playerTurn = text;

  if(playerTurn == "r" || playerTurn == "rock"){
    playerTurn = rock;
   console.log(`You choose ${playerTurn}`);
  } else if(playerTurn == "p" || playerTurn == "paper"){
    playerTurn = paper;
    console.log(`You choose ${playerTurn}`);
  }else if(playerTurn == "s" || playerTurn == "scissors"){
    playerTurn = scissors;
    console.log(`You choose ${playerTurn}`);
  }else{
    console.log("Invalid Input. Try Again...");
  } 

  let computerRandomNumber = Math.floor(Math.random() * 3) + 1;

  switch(computerRandomNumber){
    case 1:
        computerMove = rock;
    break;
    case 2: 
        computerMove = paper;
    break;
    case 3:
        computerMove = scissors;
  }
  console.log(`The computer chooses ${computerMove}`);

  if((playerTurn === rock && computerMove === scissors) || (playerTurn === paper && computerMove === rock) || (playerTurn === scissors && computerMove === paper)){
    console.log("You win!");
  } else if((playerTurn === scissors && computerMove === rock) || (playerTurn === rock && computerMove === paper) || (playerTurn === paper && computerMove === scissors)){
    console.log("You lose!");
  } else {
    console.log("This game was a draw!");
  }
}
rockPaperScissors()