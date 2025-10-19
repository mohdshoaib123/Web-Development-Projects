let userscore=0;
let compscore=0;
const genGameChoice=()=>{
    let options=["rock","paper","scissors"];
    const gen=Math.floor(Math.random()*3);
    return options[gen];
}
const showinner=(userwin)=>{
    if(userwin){
        console.log("user win")
    }
    else{
        console.log("computer win")
    }
}
const playgame=(userchoice)=>{
    console.log("user choice=",userchoice);
    const compchoice=genGameChoice();
    console.log("comp choice",compchoice)
    if(userchoice===compchoice){
        console.log("draw game")
    }
    else{
        let userwin=true;
        if(userchoice==="scissors")
        {userwin=compchoice==="rock"?false:true;

        }
        else if (userchoice==="rock")
        {
            userwin=compchoice==="paper"?false:true;
        }
        else{
            userwin=compchoice==="scissors"?false:true;
        }
        showinner(userwin);
    }

}
const choices=document.querySelectorAll(".choice");
choices.forEach((choice)=>{
choice.addEventListener("click",()=>{
    const userchoice=choice.getAttribute("id")
    // console.log("choice was clicked",userchoice);
    playgame(userchoice)
})
})