class Obstacle {
    constructor(x, y, width, height, speed, type){
        this.y = x;
        this.x = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.type = type;
    }
    draw(){
        ctx1.fillStyle = 'blue';
        ctx1.fillRect(this.x, this.y, this.width, this.height);
    }
    update(){
        this.x += this.speed * gameSpeed;
    }
}

function initObstacles(){
    // lanen 1
    for (let i = 0; i < 2; i++){
        let x = i * 350; 
        carsArray.push(new Obstacle(x, canvas.height - grid * 2 - 20, grid, grid, 1, 'car'))
    }
}

