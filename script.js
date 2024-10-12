function getComputerChoice()
{
    let computerNumber=Math.floor(Math.random()*100);
    if(computerNumber<=33){
           return "rock";
    }
    else if(computerNumber>33&&computerNumber<=66)
    {
           return "paper";
    }
    else{
          return "scissors";
    }
}
function getHumanChoice()
{
let userChoice=String(prompt("what is your choice?",''));
    return userChoice.toLocaleLowerCase();
}
let humanScore=0,computerScore=0;
//conso
function playRound()
{
   let humanChoice=getHumanChoice();
   let computerChoice=getComputerChoice();
   if(humanChoice=='rock')
   {
    if(computerChoice=='paper'){computerScore++;}
    else if(computerChoice=='scissors'){humanScore++;}
    
   }
    else if(humanChoice=='paper')
    {
        if(computerChoice=='scissors'){computerScore++;}
        else if(computerChoice=='rock'){humanScore++;}
        
    }
    else if(humanChoice=='scissors'){
        if(computerChoice=='rock'){computerScore++;}
        else if(computerChoice=='paper'){humanScore++;}
        

    }
    let winner;
  if(computerScore>humanScore){winner=0;}
  else if(humanScore>computerScore){
    winner=1;
  }
  else{
    winner=2;
  }
  return winner;
}
let humanWonCount=0,computerWonCount=0;
function playGame(num)
{
    for(let i=1;i<=num;i++)
    {
        if(playRound()==1)
        {
            console.log(`Round number ${i} is won by user`);
            humanWonCount++;
        }
        else if(playRound()==0){
            console.log(`Round number ${i} is won by computer`);
            computerWonCount++;
        }
        else{
            console.log(`Round number ${i} is draw`);
        }

    }
    if(humanWonCount>computerWonCount){
        console.log("user won overall");
    }
    else if(computerWonCount>humanWonCount){
        console.log("computer won overall");
    }
    else{
        console.log("overall the game is draw");
    }
}
let num=Number(prompt("How many rounds you want to play?"));
playGame(num);
