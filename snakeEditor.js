let skin = new Map();
function setColor(color){
    document.getElementById("part" + snakeEditor.curentPart).style = `background-color: ${color};`;
    skin.set("part" + snakeEditor.curentPart, color);
}
function setPart(partOfSnake){
    snakeEditor.curentPart = partOfSnake;
}
let snakeEditor = {
    curentPart: 0,
}

function loadGamePage(){
    let colorsToSend = [];
    for(let i = 1; i <= 3; i++){
        colorsToSend.push( skin.get("part" + i) );
    }
    window.open(`game/index.html?skin=${colorsToSend}`)
}