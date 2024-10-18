let gameSequence =[];
let userSequence=[];
let started=false;
let level =0;
let color=["red","green","pink","violet"];




//when the game start 
document.addEventListener("keypress",function(){
    if(started==false){
        document.querySelector("h2").innerText="level"+level;

        started==true;
        levelUp();}


      
})


//function to level up

function levelUp(){
    userSequence=[];
    level++;

    document.querySelector("h2").innerText="level " + level;
      //choosing the random button
      let randomIndex = Math.floor(Math.random() *3);
      let randomBtn = color[randomIndex];
     
      let chooseColor=document.querySelector("."+randomBtn);
      gamePress(chooseColor);
      gameSequence.push(randomBtn);
      console.log(gameSequence);
    

}


//function when the random button press
function gamePress(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300)

}




//function what button press by the user
function userPress(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },300)

    let userColor = btn.getAttribute("id");
    userSequence.push(userColor);
    console.log(userSequence);
   
    checkAnswer(userSequence.length-1);  

}

//function to check the answer of the user
function checkAnswer(inx){
    console.log(level);
    
    if(userSequence[inx]===gameSequence[inx]){
        if(userSequence.length==gameSequence.length){
            setTimeout(levelUp,1000);
        
        }
    }
    else{

        document.querySelector("h2").innerText="Game over : Press any key to start the game";
     
        reset();
      

    }
}





//code for clicking the button
let pressBtns = document.querySelectorAll(".btn");
//function when the click is done by the user
function userClick(){
    let btns =this;
    userPress(btns);

}

for(btn of pressBtns){
    btn.addEventListener("click",userClick);
}

//function which is reset the value of the game
function reset(){
    started=false;
    gameSequence=[];
    userSequence=[];

    level=0;
}