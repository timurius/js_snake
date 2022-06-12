const canvas = document.getElementById('map');
const cs = canvas.getContext('2d');

function drawSqr(color, size, position){
    cs.fillStyle = color;
    cs.fillRect(position[0] * size, position[1] * size, size, size);
}

document.addEventListener('keydown', function(event){
    switch(event.key){
        case "w":
            if(vectorY != 1){vectorX = 0, vectorY = -1;}
            break;
        case "a":
            if(vectorX != 1){vectorX = -1, vectorY = 0;}
            break;
        case "s":
            if(vectorY != -1){vectorX = 0, vectorY = 1;}
            break;
        case "d":
            if(vectorX != -1){vectorX = 1, vectorY = 0;}
            break;
    }
return;
});


const sqrSize = 20;
cs.fillStyle = "#000000";
cs.fillRect(0, 0, canvas.width, canvas.height);

let vectorX = 1, vectorY = 0;

let snake = {
    position : [
        [1, 1],
        [2, 1],
        [3, 1],
    ],
    color: "#00FFFF",
    snakeRender: function(event){
            
        let [x, y] = this.position.at(-1);
        this.position.push([x + vectorX, y + vectorY]);
        let oldTail = this.position.shift()
        console.log(this.position)
        console.log(vectorX, vectorY)
        drawSqr("#000000", sqrSize, oldTail);
        for(let pos of this.position){
            drawSqr(this.color, sqrSize, pos);
        }
        setTimeout(() => snake.snakeRender(), 100);
    }
};


snake.snakeRender();