const text = document.getElementById("text");
const score = document.getElementById("score");

function visualGameOver(){
    text.innerText = "Game over";// we show string "Game over" 
    let time = 0;
    let margin = parseInt(text.style.marginTop);
    let id = null;
    clearInterval(id);
    id = setInterval(waiting, 100)
    
    function textAnimation() {
        if (margin == 290) {
            score.innerText = `Total score: ${snake.score}`;
            clearInterval(id);
        } else { 
            text.style.marginTop = --margin + "px";
        }
    }
    function waiting(){
        if(time == 10){
            id = setInterval(textAnimation, 10);
        }
        time++
    }
}