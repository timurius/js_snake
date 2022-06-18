const text = document.getElementById("text");
const score = document.getElementById("score");

function visualGameOver(){
    text.innerText = "Game over";// we show string "Game over" 
    let margin = parseInt(text.style.marginTop);
    let id = null;
    clearInterval(id);
    id = setInterval(waiting, 100);
    let i = 0, time = 0;
    function textAnimation() {
        console.log("text");
        if (margin == 290) {
            id = setInterval(scoreAnim, 100)
            
        } else { 
            text.style.marginTop = --margin + "px";
        }
    }
    function waiting(){
        console.log("waiting");
        if(time == 10){    
            id = setInterval(textAnimation, 10);
        }
        time++
    }
    function scoreAnim(){
        console.log("score");
        if(i <= snake.score){
            score.innerText = `Total score: ${i++}`;
        }else{
            id = null;
            clearInterval(id);
        }
    }
}