export default class Hero {
  constructor() {
    this.SPEED = 10
    this.position = { x: 50, y: 500 }
    this.image = new Image();
    this.image.src = "./assets/sprite.png"
    this.SCALE = 2;
    this.WIDTH = 16;
    this.HEIGHT = 18;
    this.SCALED_WIDTH = this.SCALE * this.WIDTH;
    this.SCALED_HEIGHT = this.SCALE * this.HEIGHT;
  }

  moveRight() {
    this.position.x += this.SPEED;
  }

  moveLeft() {
    this.position.x -= this.SPEED;
  }


  draw(ctx){
    var frameX = 0
    var frameY = 3
    ctx.drawImage(this.image, frameX * this.WIDTH, frameY * this.HEIGHT, this.WIDTH, this.HEIGHT, this.position.x, this.position.y, this.SCALED_WIDTH, this.SCALED_HEIGHT);
  }
}

// function drawFrame(frameX, frameY, canvasX, canvasY) {
//   ctx.drawImage(img,
//                 frameX * WIDTH, frameY * HEIGHT, WIDTH, HEIGHT,
//                 canvasX, canvasY, SCALED_WIDTH, SCALED_HEIGHT);
