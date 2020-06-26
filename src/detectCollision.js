export default class DetectCollision{
  constructor(hero) {
    this.hero = hero
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
}
