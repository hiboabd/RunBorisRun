export default class Platform {
  constructor(image, x, y, height, width, movingSpeed= 0){
    this.image = new Image()
    this.image.src = image
    this.position = {x: x, y: y}
    this.height = height
    this.width = width
  }

  static movingSpeed = 0;

  draw(ctx){
    this._setSides()
    this._move()
    return ctx.drawImage(this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  _move(){
    this.position.x += Platform.movingSpeed
  }

  _setSides(){
    this.top    = this.position.y
    this.bottom = this.position.y + this.height
    this.left   = this.position.x
    this.right  = this.position.x + this.width
  }
}
