export default class Platform {
  constructor(image, x, y){
    this.height = 100
    this.width = 500
    this.position = {x: x, y: y}
    this.image = new Image();
    this.image.src = image
  }

  draw(ctx){
    return ctx.drawImage(this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}
