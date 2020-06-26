export default class Hero {
constructor() {
    this.SPEED = 2
    this.position = { x: 50, y: 730 }
    this.image = new Image();
    this.image.src = "./assets/sprite.png"
    this.SCALE = 4;
    this.WIDTH = 16;
    this.HEIGHT = 18;
    this.SCALED_WIDTH = this.SCALE * this.WIDTH;
    this.SCALED_HEIGHT = this.SCALE * this.HEIGHT;
    this.frameX = 0;
    this.frameY = 3;
    this.isMoving = false;
    this.CYCLE_LOOP = [1, 0, 2];
    this.increment = 0;
    this.jumping = false;
    this.jumpSpeed = -15;
    this.GRAVITY = 0.5;
  }
  moveRight() {
    this.frameY = 3 //<<<<
    this.position.x += this.SPEED;
    this.animateSprite()
  }

  moveLeft() {
    this.frameY = 2 
    this.position.x -= this.SPEED;
    this.animateSprite()
  }

  animateSprite(){
    if(this.jumping === true){
      this.frameX = 1
    } else {
      this.frameX = this.increment.toFixed(0)

      this.frameX = this.CYCLE_LOOP[this.frameX]
      if(this.increment > 2){
        this.increment = 0 
      } else {
        this.increment += 0.1
      }
      // console.log("Frame X")
      console.log(this.frameX)
      // console.log("increment V")
    //  console.log(this.increment)

    } 




  //  if(this.jumping === true){
  //    this.frameX = 1
  // } else {
  //     if(this.isMoving){
  //       // this.frameX = this.increment.toFixed(0)
  //       this.frameX = this.CYCLE_LOOP[this.frameX]
  //     }if (this.increment > 2){
  //       this.increment = 0
  //     } else {
  //       this.increment += 0.1 
  //       }
  //    }
  }

  jump = () => {
    this.jumpSpeed = -10;
    this.jumping = true;
    this.animateSprite()
  }

  airBorne = () => {
    if (this.jumping) {
      this.position.y += this.jumpSpeed;
      this.jumpSpeed += this.GRAVITY;
    }
  }

  draw(ctx){
    return ctx.drawImage(this.image, this.frameX * this.WIDTH, this.frameY * this.HEIGHT, this.WIDTH, this.HEIGHT, this.position.x, this.position.y, this.SCALED_WIDTH, this.SCALED_HEIGHT);
  }
}
