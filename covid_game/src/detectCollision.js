export default class DetectCollision{
  constructor(hero, ctx) {
    this.hero = hero
    this.ctx = ctx
  }

  hitBottom = () => {
    console.log(this.hero.position.y)
    var rockBottom = 600 - 50
    if (this.hero.position.y > rockBottom){
      this.hero.jumping = false
      this.hero.jumpSpeed = 0
      this.hero.position.y = rockBottom
    }
  }
}
