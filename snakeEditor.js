function setColor(color){
    document.getElementById("part" + snakeEditor.curentPart).style = `background-color: ${color};`;

}
function setPart(partOfSnake){
    snakeEditor.curentPart = partOfSnake;
}
let snakeEditor = {
    curentPart: 0,
}
