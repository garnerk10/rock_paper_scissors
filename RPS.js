const getComputerChoice = () => {
    let getNum = Math.floor(Math.random() * 3);

    switch(getNum) {
        case 0:
            return "rock";
            break;
        
        case 1:
            return "paper";
            break;
        
        case 2:
            return "scissors";
            break;
    };
};

const playGame = (playerSelection, computerSelection) => {
    let yourPick = playerSelection.toLowerCase();

    if (yourPick == computerSelection){
        return "It's a draw!"
    } else if (yourPick == "rock" && computerSelection == "scissors"){
        return "You win! Rock beats scissors!"
    } else if (yourPick == "rock" && computerSelection == "paper"){
        return "You lose... paper beats rock."
    }

    else if (yourPick == "paper" && computerSelection == "rock"){
        return "You win! Paper beats rock!"
    } else if (yourPick == "paper" && computerSelection == "scissors"){
        return "You lose... scissors beats paper."
    }

    else if (yourPick == "scissors" && computerSelection == "paper"){
        return "You win! Scissors beats paper!"
    } else if (yourPick == "scissors" && computerSelection == "rock"){
        return "You lose... rock beats scissors."}
};

let playerSelection = "rock";
let computerSelection = getComputerChoice();

const playMatch = (numRounds) => {
    let yourScore = 0;
    let comScore = 0;

    for(let i = 0; i < numRounds; i++){
        let compPick = getComputerChoice();

        let result = playGame(playerSelection, compPick);
        console.log(result);
        if (result.includes("win") == true){
            yourScore++
        } else if (result.includes("lose") == true){
            comScore++
        };

    console.log(`Your score = ${yourScore}
Computer's score = ${comScore}
`)
    };

    if(yourScore > comScore){console.log(`You win!`)}
    else if(yourScore < comScore){console.log(`You lose...`)}
    else{console.log(`It's a draw!`)}
};

playMatch(7);