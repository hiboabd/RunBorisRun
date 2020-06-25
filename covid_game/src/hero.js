export default class Hero {
  constructor(ctx) {
    this.SPEED = 10
    this.GRAVITY = 0.2;
    this.jumpSpeed = 0;
    this.position = { x: 50, y: 550 }
    this.jumping = false;
    this.ctx = '';
  }

  moveRight() {
    this.position.x += this.SPEED;
  }

  moveLeft() {
    this.position.x -= this.SPEED;
  }

  jump = () => {
    this.jumpSpeed = -10;
    this.jumping = true;
  }

  airBorne = () => {
    if (this.jumping) {
      this.position.y += this.jumpSpeed;
      this.jumpSpeed += this.GRAVITY;
    }
  }

  draw(ctx){
    this.ctx = ctx
    ctx.fillStyle = '#0ff'
    ctx.fillRect(this.position.x, this.position.y, 50, 50);
  }
}
