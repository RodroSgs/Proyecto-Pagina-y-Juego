function animate(){
    ctx1.clearRect(0, 0, canvas.width, canvas.height);
    ctx2.clearRect(0, 0, canvas.width, canvas.height);
    ctx3.clearRect(0, 0, canvas.width, canvas.height);
    ctx4.clearRect(0, 0, canvas.width, canvas.height);
    ctx5.clearRect(0, 0, canvas.width, canvas.height);
    handleRipples();
    ctx2.drawImage(callepastofondo, 0, 0, canvas.width, canvas.height); 
    handleParticles();
    frogger.draw();
    frogger.update();
    
    handleObstacles();
    handleScoreBoard();
    // ctx4.drawImage(arbustos, 0, 0); 
    frame++;
    requestAnimationFrame(animate);
    
}
animate();

//teclas
window.addEventListener('keydown', function(e){
    keys = [];
    keys[e.keyCode] = true;
    if (keys[37] || keys[38] || keys[39] || keys[40]){
        frogger.jump();
    }
});

window.addEventListener('keyup', function(e){
    delete keys[e.keyCode]; 
    frogger.moving = false;
    frogger.frameX = 0;
});

function scored(){
    score++;
    gameSpeed += 0.05;
    frogger.x = canvas.width/2 - frogger.width/2;
    frogger.y = canvas.height - frogger.height - 40; 
}

function handleScoreBoard(){
    ctx4.fillStyle = 'black';
    ctx4.strokeStyle = 'black';
    ctx4.font = 'solid 15px Arial'
    ctx4.strokeText('Puntuación', 250, 15)
    ctx4.font = '60px Verdana';
    ctx4.fillText(score, 270, 65);
    ctx4.font = '15px Verdana';
    ctx4.strokeText('Choques: ' + collisionsCount, 10, 175);
    ctx4.strokeText('Velocidad: ' + gameSpeed.toFixed(1), 10, 195); 
}
 

//choques
function Collision(first, second){
    return !( first.x > second.x + second.width ||
               first.x + first.width < second.x ||
               first.y > second.y + second.height ||
               first.y + first.height < second.y); 
}

function resetGame(){
    frogger.x = canvas.width/2 - frogger.width/2;
    frogger.y = canvas.height - frogger.height - 40;
    score = 0;
    collisionsCount++;
    gameSpeed = 1;
}