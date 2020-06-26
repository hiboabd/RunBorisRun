export default class Platform {
  constructor(image, x, y){
    this.height = 200
    this.width = 200
    this.position = {x: x, y: y}
    this.image = image
  }

  draw(ctx){
    return ctx.drawImage(this.image,
      this.width,
      this.height,
      this.position.x,
      this.position.y
    );
  }
}
