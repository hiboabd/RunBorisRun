export default class DetectCollision{
  constructor(hero, platforms) {
    this.hero = hero
    this.platforms = platforms
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
    // console.log(` position: y ${this.hero.position.y}`)
    // console.log(` platform: y ${platform.position.y}`)
    // console.log(` position x:  ${this.hero.position.x}`)
    // console.log(` platform: x ${platform.position.x}`)
    // console.log(` platform width: ${platform.width}`)

    let heroTop    = this.hero.position.y
    let heroBottom = this.hero.position.y + this.hero.SCALED_HEIGHT
    let heroWidth  = this.hero.position.x + this.hero.SCALED_WIDTH - 20
    let heroBack   = this.hero.position.x + 20

    let sideTouched = false;

    for (var i = 0; i < this.platforms.length; i++) {
      let platform          = this.platforms[i]
      let platformTop       = platform.position.y
      let platformBottom    = platform.position.y + platform.height
      let platformLeftEdge  = platform.position.x
      let platformRightEdge = platform.position.x + platform.width

      let placeOnPlatform = platform.position.y - this.hero.SCALED_HEIGHT

      // If hero is about to land on platform
      if(heroBottom > platformTop &&
         heroBottom < platformTop + 50 &&

         heroWidth > platformLeftEdge + 10 &&
         heroBack < platformRightEdge - 10) {
           this.hero.position.y = placeOnPlatform
           this.touching = true
           this.hero.jumping = false
           this.hero.jumpSpeed = 0
           console.log("Hero sideTouched platform!");
      }

      // If hero touches the left or right side of the platform
      if(heroWidth > platformLeftEdge &&
         heroWidth < platformLeftEdge + 10 &&
         heroBottom > platformTop &&
         heroBottom < platformBottom){
           sideTouched = true
         }

      if(heroBack < platformRightEdge &&
         heroBack > platformRightEdge - 10 &&
         heroBottom > platformTop &&
         heroBottom < platformBottom){
           sideTouched = true
         }

      // If hero touches the underside of platform
      if(heroTop + (this.hero.jumpSpeed / 2) < platformBottom &&
         heroTop > platformBottom - 10 &&
         heroWidth > platformLeftEdge + 10 &&
         heroBack < platformRightEdge - 10){
           this.hero.jumping = true
           this.hero.jumpSpeed = 1
         }

      // If hero walks off platform
      if(heroBottom == platformTop &&
         (heroWidth < platformLeftEdge &&
          heroWidth > platformLeftEdge -50 ||
          heroBack > platformRightEdge &&
          heroBack < platformRightEdge +50
        )) {
           this.hero.jumping = true
           this.hero.jumpSpeed = 1
      }
    }

    if(sideTouched){
      this.hero.SPEED = 0
    } else {
      this.hero.SPEED = 4
    }



   // If player touches left side of the platform and their not inbetween it



    // if(heroWidth > platformLeftEdge && heroBottom < platformTop){
    //   this.hero.position.x = platformLeftEdge - (this.hero.SCALED_WIDTH + 20)
    // }

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
