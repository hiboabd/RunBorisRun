export default class DetectCollision{
  constructor(hero, platform) {
    this.hero = hero
    this.platform = platform
    this.touching = false
  }

  hitBottom = () => {
    var rockBottom = 730
    if (this.hero.position.y > rockBottom){
      this.hero.jumping = false
      this.hero.jumpSpeed = 0
      this.hero.position.y = rockBottom
    }
  }

  hitEdge = () => {
    var leftEdge = 0
    var rightEdge = 750
    if (this.hero.position.x < leftEdge){
      this.hero.position.x = leftEdge
    } else if (this.hero.position.x > rightEdge){
      this.hero.position.x = rightEdge
    }
  }

  hitPlatform = () => {
    console.log(` position: y ${this.hero.position.y}`)
    console.log(` platform: y ${this.platform.position.y}`)
    console.log(` position x:  ${this.hero.position.x}`)
    console.log(` platform: x ${this.platform.position.x}`)
    console.log(` platform width: ${this.platform.width}`)

    // If hero goes under platform && is inbetween the platform
    if(this.hero.position.y < this.platform.position.y &&
       this.hero.position.x > this.platform.position.x &&
       this.hero.position.x < (this.platform.position.x + this.platform.width)) {
         this.hero.position.y = (this.platform.position.y - this.hero.SCALED_HEIGHT)
         this.touching = true
         this.hero.jumping = false
         this.hero.jumpSpeed = 0
         console.log("Hero touched platform!");
    }

    if(this.hero.position.y + this.hero.SCALED_HEIGHT === this.platform.position.y &&
       (this.hero.position.x + 50 < this.platform.position.x || this.hero.position.x > (this.platform.position.x + this.platform.width))) {
         this.touching = false
         this.hero.jumping = true
         this.hero.jumpSpeed = 1
         console.log("Hero falled off platform platform!");
    }

    //else {
    //   this.jumpSpeed = 1;
    //   this.hero.jumping = true
    // }


    //platform.height = 100
    //platform.width = 500
    //platform.position.x = 300
    //platform.position.y = 600

    //platform max x position = 400
    //platform max y position = 1100


    //hero.HEIGHT = 18;
    //hero.WIDTH = 16;
    //hero.position.x = 280
    //hero.position.y = 610

    //platform max x position = 298
    //platform max y position = 616

  }
}
