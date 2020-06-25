export default class Hero {
  constructor(ctx) {
    this.SPEED = 10
    this.GRAVITY = 0.2;
    this.jumpSpeed = 0;
    this.position = { x: 50, y: 500 }
    this.jumping = false;
    this.ctx = '';
  }

  moveRight() {
    this.position.x += this.SPEED;
  }

  moveLeft() {
    this.position.x -= this.SPEED;
  }

  // onTimerTick() {
  //   this.airBorne();
  //   console.log(this.position.y);
  // }

  jump = () => {
    console.log('In jump()');
    console.log(this);
    this.jumpSpeed = -10;
    this.jumping = true;
  }

  airBorne = () => {
    console.log('In airBorne()');
    console.log(this.position.y);
    if (this.jumping) {
      this.position.y += this.jumpSpeed;
      this.jumpSpeed += this.GRAVITY;
      this.ctx.clearRect(0, 0, 800, 600);
      this.draw(this.ctx)
    }
    window.requestAnimationFrame(this.airBorne);
  }

  draw(ctx){
    this.ctx = ctx
    ctx.fillStyle = '#0ff'
    ctx.fillRect(this.position.x, this.position.y, 50, 50);
  }
}
