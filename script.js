let userScore = 0;
let compScore = 0;

//access counts
userCount = document.querySelector(".userCount");
compCount = document.querySelector(".compCount");

const choices = document.querySelectorAll(".logo");


//access the message to display
const msg = document.querySelector("#next");


const sad = document.querySelector("#sad");
const happy = document.querySelector("#happy");
const confused = document.querySelector("#confused");

//function that returns random computer choices
const generateCompChoice = () =>{
    const options = ["stone","paper","scissor"];
    const randIndex = Math.floor(Math.random()*3);
    return options[randIndex];
}

const drawGame = ()=>{
    console.log("Game Drawn");
    msg.innerText = "Game Drawn!";
    
    msg.classList.remove("btn-primary","btn-danger");
    msg.classList.add("btn-warning");
}

//show winner
const showWinner = (userWin,userChoice,compChoice) =>{
    if (userWin) {
        console.log("You Win!");
        msg.innerText = `You Win! Congrats!! ${userChoice} beats ${compChoice}`;
        userScore++;
        userCount.innerText = userScore;

        msg.classList.remove("btn-danger");
        msg.classList.add("btn-primary");

    }
    else{
        console.log("You Lose!");
        msg.innerText =  `You Lose! Try Again!! ${compChoice} beats ${userChoice}`;
        compScore++;
        compCount.innerText = compScore;

        msg.classList.remove("btn-primary","btn-warning");
        msg.classList.add("btn-danger");
    }
}

//function that prints user and computer choices
const playGame = (userChoice) =>{
    console.log("user clicked",userChoice);

    //generate computer choice
    const compChoice = generateCompChoice();
    console.log("computer choice",compChoice);

    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice==="scissor"){
            if(compChoice==="stone"){
                userWin = false;
            }else{
                userWin = true;
            }
        }
        else if(userChoice==="stone"){
            if (compChoice==="paper") {
                userWin = false;
            }   
            else{
                userWin = true;
            }
        }
        showWinner(userWin,userChoice,compChoice);
    }
    
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
       //calling the function which returns both competitors' choices
        playGame(userChoice);
    })
})