'strict mode'

const panelBott = document.querySelector(".panel-bott");
const timer = document.querySelector(".timer");
const hit = document.querySelector(".hit");
const score = document.querySelector(".score");
const msgpanel = document.querySelector(".msgpanel");
const msgscore = document.querySelector(".msg-score");
const msghiscore = document.querySelector(".msg-highscore");
const restartbtn = document.querySelector(".restart-btn");


let highscore=0;
let time=20;
 
const hitReset = function () {
    hit.textContent = Math.floor(Math.random() * 10);
}

const randomize = function () {

    let code = '';
    for (let i = 0; i < 99; i++) {
        code += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`
    }
    panelBott.innerHTML = code;

    const bubble = document.querySelectorAll(".bubble");
    bubble.forEach(element => {
        element.addEventListener("click", function () {
            
            randomize();
            addScore(element);
            hitReset();
        })

    });

}



const timerSet = function (t) {
    timer.textContent = t;
    let interval = setInterval(function () {
        if (timer.textContent > 0)
            timer.textContent -= 1;
        else
        {
            clearInterval(interval);
            endGame();

        }
    }, 1000);
}

const addScore = function (element) {
    if (Number(element.textContent) == Number(hit.textContent)) {

        score.textContent = Number(hit.textContent)+Number(score.textContent);
    }
    else
    {
        score.textContent = Number(score.textContent)-Number(hit.textContent);
    }
}
restartbtn.addEventListener("click",function(){
    hitReset();
    timerSet(time);
    toggleMsg();
    score.textContent=0;

})
const toggleMsg= function(){

    msgscore.textContent="Your Score: "+score.textContent;

    panelBott.classList.toggle("hidden");
    msgpanel.classList.toggle("hidden");
}

const endGame = function(){
    toggleMsg();
    console.log('pk')
    if(Number(score.textContent)>highscore)
    {
        highscore=Number(score.textContent);
        msghiscore.textContent =  `Highscore: ${highscore}`;

    }
}
// endGame();
timerSet(time);
randomize();
hitReset();



