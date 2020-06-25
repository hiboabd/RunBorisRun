export default class Hero {
  constructor() {
    this.SPEED = 10
    this.position = { x: 50, y: 750 }
    this.image = new Image();
    this.image.src = "./assets/sprite.png"
    this.SCALE = 2;
    this.WIDTH = 16;
    this.HEIGHT = 18;
    this.SCALED_WIDTH = this.SCALE * this.WIDTH;
    this.SCALED_HEIGHT = this.SCALE * this.HEIGHT;
    this.frameX = 0
    this.frameY = 3
  }

  moveRight() {
    this.frameY = 3
    this.position.x += this.SPEED;
  }

  moveLeft() {
    this.frameY = 2
    this.position.x -= this.SPEED;
  }


  draw(ctx){
    ctx.drawImage(this.image, this.frameX * this.WIDTH, this.frameY * this.HEIGHT, this.WIDTH, this.HEIGHT, this.position.x, this.position.y, this.SCALED_WIDTH, this.SCALED_HEIGHT);
  }
}

// function drawFrame(frameX, frameY, canvasX, canvasY) {
//   ctx.drawImage(img,
//                 frameX * WIDTH, frameY * HEIGHT, WIDTH, HEIGHT,
//                 canvasX, canvasY, SCALED_WIDTH, SCALED_HEIGHT);
