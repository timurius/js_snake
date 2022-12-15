const text = document.getElementById("text");
const score = document.getElementById("score");

function visualGameOver(){
    document.getElementById("gameOverBlock").style.opacity = "1";// we show string "Game over" 
    let i = 0, j = 0;
    let id;
    let margin = parseInt(text.style.marginTop);
    setInterval( () => canvas.style.filter = "grayscale(" + (parseInt( (canvas.style.filter).slice(10) ) + 1) + "%)", 20 );
    setTimeout(scoreAnim, 2000);
    function scoreAnim(){
        console.log(score);
        id = setInterval( () => {
            score.innerText = `Total score: ${j}`;
            j++;
            if(j > snake.score ) clearInterval(id);
        }, 80);
    }
}