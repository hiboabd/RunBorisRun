export default class Background{
  constructor(){
    this.background = new Image()
    this.background.src = "/assets/city_pixels.png";
    this.background1X = 0
    this.background2X = 6500


  }

  moveBackground(hero, input, ctx){



    if(hero.position.x < 750){
      this.draw(ctx)
    } else if (hero.position.x === 750 && hero.isMoving === false) {
      this.draw(ctx)
    } else {
      this.background1X -= 3
      this.background2X -= 3
      if(this.background1X === -6500){
        this.background1X = 6500
      } else if (this.background2X === -6500) {
          this.background2X = 6500
      }
    }
      this.draw(ctx)


    // if(hero.position.x === 750){
    //   if (input.isMoving ===) {
    //     console.log(hero.isMoving)
    //     this.background1X -= 5
    //     this.draw(ctx)
    //   } else {
    //     this.draw(ctx)
    //   }
    // }




    // if(hero.position.x === 750 && input.right === false){


    //   this.background1X -= 0
    //   console.log(input.right)
    //   this.draw(ctx)

    //   // if(this.background1X === -1500){
    //   //   this.background1X = 1500
    //   // } else if (this.background2X === -1500) {
    //   //    this.background2X = 1500
    //   // }
    // } else if  {
    //   this.background1X -= 5
    //   this.draw(ctx)
    // }


  }

  draw(ctx){
    ctx.drawImage(this.background, this.background1X, 0, 6500,800);
    ctx.drawImage(this.background, this.background2X, 0, 6500,800);
  }


}
