
const gameState = {}

function preload(){
  this.load.image('codey', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/codey.png'
)}

function create(){  
  gameState.codey = this.add.sprite(250, 250, 'codey'),
  gameState.cursors = this.input.keyboard.createCursorKeys()
  gameState.circle = this.add.circle(50, 100, 10, "0xFFF070");
}

function update(){  
  if (gameState.cursors.down.isDown){    
      gameState.codey.y += 1;  
  }
}

const config = {  
  type: Phaser.AUTO,
  width: 500, 
  height: 500,  
  backgroundColor: 0xdda0dd, 
  scene: {   
    preload,    
    create,    
    update  
  }
}

window.onload = function () {
  let game = new Phaser.Game(config);
};