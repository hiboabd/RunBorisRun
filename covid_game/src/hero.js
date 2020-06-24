export default class Hero {
  constructor() {
    this.SPEED = 10
    this.position = { x: 200, y: 200 }
  }

  moveRight() {
    this.position.x += this.SPEED;
  }

  moveLeft() {
    this.position.x -= this.SPEED;
  }


  draw(ctx){
    ctx.fillStyle = '#0ff'
    ctx.fillRect(this.position.x, this.position.y, 50, 50);
  }
}
