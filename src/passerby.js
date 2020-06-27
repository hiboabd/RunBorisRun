export default class Passerby {
constructor() {
    this.position = {x: 100, y: 730}
    this.image = new Image();
    this.image.src = "./assets/sprite.png"
    this.SCALE = 4;
    this.WIDTH = 16;
    this.HEIGHT = 18;
    this.SCALED_WIDTH = this.SCALE * this.WIDTH;
    this.SCALED_HEIGHT = this.SCALE * this.HEIGHT;
  }

  draw(ctx){
    return ctx.drawImage(this.image, this.frameX * this.WIDTH, this.frameY * this.HEIGHT, this.WIDTH, this.HEIGHT, this.position.x, this.position.y, this.SCALED_WIDTH, this.SCALED_HEIGHT);
  }

}
