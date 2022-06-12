const canvas = document.getElementById('map');
const cs = canvas.getContext('2d');

function drawSqr(color, size, position){
    cs.fillStyle = color;
    cs.fillRect(position[0] * size, position[1] * size, size, size);
}

const sqrSize = 20;
cs.fillStyle = "#000000";
cs.fillRect(0, 0, canvas.width, canvas.height);


let snake = {
    position : [
        [1, 1],
        [2, 1],
        [3, 1],
    ],
    color: "#00FFFF",
    snakeRender: function(event){
        let [x, y] = this.position.at(-1);
        this.position.push([x + 1, y]);
        let oldTail = this.position.shift()
        console.log(this.position)
        drawSqr("#000000", sqrSize, oldTail);
        for(let pos of this.position){
            drawSqr(this.color, sqrSize, pos);
        }
        setTimeout(() => snake.snakeRender(), 1000);
    }
};


snake.snakeRender();