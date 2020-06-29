export default class Platform {
  constructor(image, x, y, height, width, movingSpeed= 0){
    this.image = new Image()
    this.image.src = image
    this.position = {x: x, y: y}
    this.height = height
    this.width = width
    this.movingSpeed = movingSpeed
  }

  draw(ctx){
    this._setSides()
    return ctx.drawImage(this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  move(){
    this.position.x += this.movingSpeed
  }

  _setSides(){
    this.top    = this.position.y
    this.bottom = this.position.y + this.height
    this.left   = this.position.x
    this.right  = this.position.x + this.width
  }
}
