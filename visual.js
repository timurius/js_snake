const text = document.getElementById("text");
const score = document.getElementById("score");

function visualGameOver(){
    text.innerText = "Game over";// we show string "Game over" 
    let i = 0;
    let margin = parseInt(text.style.marginTop);
    setTimeout(textAnimation, 1000);
    score.innerText = "Total score: ";
    setInterval(scoreOpacity, 2000);
    function textAnimation() {
        console.log("text");
        text.style.marginTop = (margin - i) + "px";
        ++i;
        if(i != 20) setTimeout(textAnimation, 30);
    }
    function scoreOpacity(){
        console.log("opacity");
        score.style.opacity = score.style.opacity + 0.1;
        setTimeout(scoreOpacity, 1000);
    }
    function scoreAnim(){
        console.log("score");
        score.innerText = `Total score: ${i}`;
    }
}