let homeScore=document.getElementById("score-home")
let guestScore=document.getElementById("score-guest")
let homeScoreCount=0
let guestScoreCount=0
guestScore.textContent=guestScoreCount
homeScore.textContent=homeScoreCount
function formatHighScore(){
    if(homeScoreCount>guestScoreCount){
        guestScore.removeAttribute("id", "highScore");
        homeScore.setAttribute("id", "highScore");
    }else{
        homeScore.removeAttribute("id", "highScore");
        guestScore.setAttribute("id", "highScore");
    }
}

function increaseOne(owner){
    if(owner==1){
        homeScoreCount+=1;
        homeScore.textContent=homeScoreCount
    }
    if(owner==2){
        guestScoreCount+=1;
        guestScore.textContent=guestScoreCount
    }
    formatHighScore();
}

function increaseTwo(owner){
    if(owner==1){
        homeScoreCount+=2;
        homeScore.textContent=homeScoreCount
    }
    if(owner==2){
        guestScoreCount+=2;
        guestScore.textContent=guestScoreCount
    }
    formatHighScore();
}


function increaseThree(owner){
    if(owner==1){
        homeScoreCount+=3;
        homeScore.textContent=homeScoreCount
    }
    if(owner==2){
        guestScoreCount+=3;
        guestScore.textContent=guestScoreCount
    }
    formatHighScore();
}

