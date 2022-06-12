const canvas = document.getElementById('map');
const cs = canvas.getContext('2d');

function drawSqr(color, size, position){
    cs.fillStyle = color;
    cs.fillRect(position[0] * size, position[1] * size, size, size);
}

document.addEventListener('keydown', function(event){//checking for a pressed buttons
    switch(event.key){
        case "w":
            if(vectorY != 1){vectorX = 0, vectorY = -1;}//change the direction depending on the pressed button
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


const sqrSize = 20;//set all squares size
cs.fillStyle = "#000000";
cs.fillRect(0, 0, canvas.width, canvas.height);//make canvas black

let vectorX = 1, vectorY = 0;

let snake = {//the snake object
    position : [//position of every part of body
        [1, 1],
        [2, 1],
        [3, 1],
    ],
    color: "#00FFFF",//color of snake
    snakeRender: function(event){//there we draw our snake
        //snake moving by aditing a new head in the end of "postion" and deleting the tai;
        let [x, y] = this.position.at(-1);
        this.position.push([x + vectorX, y + vectorY]);//add the new head
        let oldTail = this.position.shift()//delete the old tail
        //now position of snake was changed
        //lets draw the snake by position
        console.log(this.position)
        console.log(vectorX, vectorY)
        drawSqr("#000000", sqrSize, oldTail);
        for(let pos of this.position){
            drawSqr(this.color, sqrSize, pos);
        }
        setTimeout(() => snake.snakeRender(), 100);//this will call this function every 100ms
    }
};


snake.snakeRender();