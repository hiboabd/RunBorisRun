export default class Hero {
  constructor() {
    this.SPEED = 1
    this.position = { x: 200, y: 200 }
  }

  moveRight() {
    this.position.x += this.SPEED;
  }
}
