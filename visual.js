const text = document.getElementById("text");
const score = document.getElementById("score");

function visualGameOver(){
    text.innerText = "Game over";// we show string "Game over" 
    let i = 0, j = 0;
    let id;
    let margin = parseInt(text.style.marginTop);
    id = setTimeout(textAnimation, 1000);
    score.innerText = "Total score: ";
    id = setTimeout(scoreOpacity, 2000);
    console.log("after opacity");
    setTimeout(scoreAnim, 3000);
    function textAnimation() {
        console.log("text");
        text.style.marginTop = (margin - i) + "px";
        ++i;
        if(i != 20) { setTimeout(textAnimation, 30); }
        else { clearInterval(); }
    }
    function scoreOpacity(){
        console.log("opacity");
        score.style.opacity = (parseFloat(score.style.opacity) + 0.1).toString();
        if(score.style.opacity != "1") setTimeout(scoreOpacity, 10);
    }
    function scoreAnim(){
        id = setInterval( () => {
            console.log(j);
            score.innerText = `Total score: ${j}`;
            j++;
            if(j > snake.score ) clearInterval(id);
        }, 80);
    }
}