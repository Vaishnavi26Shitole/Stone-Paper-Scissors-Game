let usreScore=0;
let compScore=0;
let choices=document.querySelectorAll(".choice");

let msg=document.querySelector("#msg");
let usreScorePara=document.querySelector("#user-score");
let compScorePara=document.querySelector("#comp-score")

const genCompChoice=(()=>{
    const option=["rock","paper","scissors"]
    const idx= Math.floor(Math.random() * 3);
    return option[idx];
})

const drawGame=(()=>{
    console.log("Game was draw");
    msg.innerText="Game Was Draw.Play Again";
    msg.style.backgroundColor=" #011225";

})
const showWinner=((userwin,userChoice,compChoice)=>{
    if(userwin){
        usreScore++;
        usreScorePara.innerText=usreScore
        msg.innerText=`You Win.Your ${userChoice} beats ${compChoice}`
       msg.style.backgroundColor="green"
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You Lose.${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor="red"
    }
});

const playGame=((userChoice)=>{
    console.log("usre choice is",userChoice);
    const compChoice=genCompChoice();
    console.log("computer choice is",compChoice);

    if(userChoice===compChoice){
        drawGame();
    }else{
        let userwin=true;
        if(userChoice==="rock"){
           userwin= compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            userwin=compChoice==="scissors"? false:true;
        }else{
            userwin=compChoice==="rock"? false:true;
        }
        showWinner(userwin,userChoice,compChoice);
    }

})
choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice);
    })
});