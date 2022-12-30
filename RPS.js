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
        player_score++;
        return "You win! Rock beats scissors!"
    } else if (yourPick == "rock" && computerSelection == "paper"){
        computer_score++;
        return "You lose... paper beats rock."
    }

    else if (yourPick == "paper" && computerSelection == "rock"){
        player_score++;
        return "You win! Paper beats rock!"
    } else if (yourPick == "paper" && computerSelection == "scissors"){
        computer_score++;
        return "You lose... scissors beats paper."
    }

    else if (yourPick == "scissors" && computerSelection == "paper"){
        player_score++;
        return "You win! Scissors beats paper!"
    } else if (yourPick == "scissors" && computerSelection == "rock"){
        computer_score++;
        return "You lose... rock beats scissors."};


};

let playerSelection = ""
let computerSelection = getComputerChoice();
let player_score = 0;
let computer_score = 0;

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

const rock_button = document.getElementById('rock');
const paper_button = document.getElementById('paper');
const scissors_button = document.getElementById('scissors');
const comp_img = document.getElementById('comp_img');

const your_score = document.getElementById('your_score');
const comp_score = document.getElementById('comp_score');
let outcome = document.getElementById('outcome');

const getImg = (getPick) => {
    if (getPick === "rock"){
        comp_img.src = "rock.png"
    } else if (getPick === "paper"){
        comp_img.src = "paper.png"
    } else if (getPick === "scissors"){
        comp_img.src = "scissors.png"
    }
};

//if player selects the rock button
let pick_rock = () => {
    let playerSelection = "rock";
    let computerSelection = getComputerChoice();
    outcome.innerText = playGame(playerSelection, computerSelection);
    your_score.innerText = player_score;
    comp_score.innerText = computer_score;
    getImg(computerSelection);
    comp_img.style.border = "1px solid black";
    again();
};

rock_button.addEventListener("click", pick_rock);

//if player selects the paper button
let pick_paper = () => {
    let playerSelection = "paper";
    let computerSelection = getComputerChoice();
    outcome.innerText = playGame(playerSelection, computerSelection);
    your_score.innerText = player_score;
    comp_score.innerText = computer_score;
    getImg(computerSelection);
    comp_img.style.border = "1px solid black";
    again();
};

paper_button.addEventListener("click", pick_paper);

//if player selects the scissors button
let pick_scissors = () => {
    let playerSelection = "scissors";
    let computerSelection = getComputerChoice();
    outcome.innerText = playGame(playerSelection, computerSelection);
    your_score.innerText = player_score;
    comp_score.innerText = computer_score;
    getImg(computerSelection);
    comp_img.style.border = "1px solid black";
    again();
};

scissors_button.addEventListener("click", pick_scissors);

//once either computer or player gets 5 wins
const play_again = document.getElementsByClassName('play_again');
const again_button = document.getElementById('again_button');
const again_text = document.getElementById('again_text');
const selections = document.getElementsByClassName('selections');
const computer = document.getElementsByClassName('computer');
const results = document.getElementsByClassName('results');

const again = () => {
    if(player_score === 5 || computer_score === 5){
        selections.display = "none";
        computer.display = "none";
        results.display = "none";
        if(player_score === 5){
            play_again.display = "flex";
        } else if(computer_score === 5){
            again_text.innerText = "You lose...";
            play_again.display = "flex";
        };
        console.log('im working');
    };
};

const restart = () => {
    player_score = 0;
    computer_score = 0;
    play_again.display = "none";
    selections.display = "flex";
    computer.display = "flex";
    results.display = "flex";
};

again_button.addEventListener("click", restart);