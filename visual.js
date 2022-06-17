const text = document.getElementById("text");
const score = document.getElementById("score");

function visualGameOver(){
    text.innerText = "Game over";// we show string "Game over" 
    let margin = text.style.marginTop;
    for(let i = 0; i <= 20; i++){
        setTimeout(() => text.style.marginTop = (parseInt(margin) - i) + "px", 1000);
    }
}