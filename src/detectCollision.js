export default class DetectCollision{
  constructor(hero) {
    this.hero = hero
  }

  hitBottom = () => {
    console.log(this.hero.position.y)
    var rockBottom = 800 - 50
    if (this.hero.position.y > rockBottom){
      this.hero.jumping = false
      this.hero.jumpSpeed = 0
      this.hero.position.y = rockBottom
    }
  }
}
