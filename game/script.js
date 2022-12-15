const canvas = document.getElementById('map');//get canvas from html page
const cs = canvas.getContext('2d');

let canvasHeightInSqrs, canvasWidthInSqrs;

let sqrSize;

function changeCanvasSize() {
    canvas.height = Math.floor(window.innerHeight / 2);
    canvas.width = Math.floor(window.innerWidth / 2);

    sqrSize = Math.floor( (canvas.height + canvas.width) / 100 );//set all squares size


    canvasHeightInSqrs = Math.floor(canvas.height / sqrSize);
    canvasWidthInSqrs = Math.floor(canvas.width / sqrSize);

    
    let canvasMargin = [window.innerHeight / 4,  window.innerWidth / 4];

    canvas.style.marginTop =  canvasMargin[0] + "px";
    canvas.style.marginLeft = canvasMargin[1] + "px";


    cs.fillStyle = "#000000";
    cs.fillRect(0, 0, canvas.width, canvas.height);//make canvas black
}

window.addEventListener('load', changeCanvasSize);
window.addEventListener('resize', changeCanvasSize)

let snake = {//the snake object
    position : [//position of every part of body
        [1, 1],
        [2, 1],
        [3, 1],
        [4, 1],
        [5, 1],
        [6, 1],
    ],
    color: ['yellow', 'fuchsia', 'yellow'],//color of snake
    colorNum: 0,
    score : 0,
    snakeRender: function(){//there we draw our snake
        let [x, y] = this.position.at(-1);
        //snake moving by aditing a new head in the end of "postion" and deleting the tail
        //checking need we teleport snake to other wall or not
        appleWasAte = appleEating([x, y], apple.position, this.score)
        if(appleWasAte){
            this.score++;
            apple.position = generateRandomPosition();
        }

        let nextX = (x + vectorX == canvasWidthInSqrs - 1) ? 1 :
        (x + vectorX == 0) ? canvasWidthInSqrs - 2 : 
        x + vectorX;

        let nextY = (y + vectorY == canvasHeightInSqrs - 1) ? 1 : 
        (y + vectorY == 0) ? canvasHeightInSqrs - 2: 
        y + vectorY
        if(!gameOver(this.position, nextX, nextY)){// if it`s not game over
            if(!appleWasAte){// if we ate an apple we don`t need to delete the tail and because that our snake become bigger
                let oldTail = this.position.shift()//delete the old tail
                drawSqr("#000000", sqrSize, oldTail);
            }
            
            this.position.push([nextX, nextY]);//add the new head
            
            //now position of snake was changed
            //lets draw the snake by position
            
            for(let pos of this.position){
                drawSqr(this.color[this.colorNum], sqrSize, pos);
                this.colorNum == 3 ? this.colorNum = 0 : this.colorNum++;
                console.log(this.color);
            }
            this.colorNum = 0;
            setTimeout(snake.snakeRender.bind(this), 100);//this will call this function every 100ms
        }
        
    }
};


if(window.location.search.substring(6) != "") snake.color = window.location.search.substring(6).split(",");


let apple = {//the apple
    position : [8, 1],//position of apple
    color : "#FF0000",//color of apple
    appleRender : function(){//there we draw the apple
        while(isAppleInSnake(this.position, apple.position)){
            this.generateRandomPosition();
        }
        drawSqr(this.color, sqrSize, this.position);
        setTimeout(() => apple.appleRender(), 100);
    }
}

let move = true;

let vectorX = 1, vectorY = 0;

apple.appleRender();
snake.snakeRender();

function drawSqr(color, size, position){// this is the function which draw pixels(squares)
    cs.fillStyle = color;
    cs.fillRect(position[0] * size, position[1] * size, size, size);
}

function gameOver(pos, x, y){
    let isGameOver = false;// this variable shows, need we continue render of snake or not
    pos.forEach( (value, index) => {// check every part of body without head
        if( (value[0] == x && value[1] == y) ){// if head have the same position as any part of body
            visualGameOver();
            isGameOver = true;//and end the render
        }
    });
    return isGameOver;
}

function appleEating(headPos, applePos, score){//checkind, did the snake ate an apple or not?
    if(headPos[0] == applePos[0] && headPos[1] == applePos[1]){
        return true;
    }
}

document.addEventListener('keydown', function(event){//checking for a pressed buttons
    if(move){
        switch(event.code){
        case "KeyW":
            movement.up();//change the direction depending on the pressed button
            break;
        case "KeyA":
            movement.left();
            break;
        case "KeyS":
            movement.down();
            break;
        case "KeyD":
            movement.right();
            break;
        }
    }
    move = false;
});

document.addEventListener('keyup', function(event){//that fix the bug when the snake can go in itself
    move = true;
});

function isAppleInSnake(snakePos, applePos){
    for(let p of snakePos){
        if(p[0] == applePos[0] && p[1] == applePos[1]) return true;
    }
    return false;
}

function generateRandomPosition(){
    return [Math.floor( (Math.random() * ( (canvas.width / sqrSize) - 3) ) + 1), Math.floor( (Math.random() * ( (canvas.height / sqrSize) - 3) ) + 1)];
}

let movement = {
    left : function(){ 
        if(vectorX != 1){
            vectorX = -1; vectorY = 0;
        } 
    },
    right : function(){ 
        if(vectorX != -1){ 
            vectorX = 1; vectorY = 0;
        } 
    }, 
    up : function(){ 
        if(vectorY != 1){ 
            vectorX = 0; vectorY = -1; 
        } 
    },
    down : function(){
        if(vectorY != -1){ 
            vectorX = 0; vectorY = 1;
        } 
    },  
}