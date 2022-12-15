let skin = new Map();
skin.set( "part1", "cyan" ).set( "part2", "cyan" ).set( "part3", "cyan" )
function setColor(color){
    document.getElementById("part" + snakeEditor.curentPart).style = `background-color: ${color};`;
    skin.set("part" + snakeEditor.curentPart, color);
}
function setPart(partOfSnake){
    snakeEditor.curentPart = partOfSnake; 
    for (let i = 1; i <= 3; i++) {
        document.getElementById("part" + i).style.border = `none`;
    }
    document.getElementById("part" + snakeEditor.curentPart).style.border = "3px solid white";
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