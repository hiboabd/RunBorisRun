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

  hitPasserby = (passerby, input) => {

    var passerbyFront = passerby.position.x + 64
    var passerbyBack = passerby.position.x
    var heroFront = this.hero.position.x + 64
    var heroBack = this.hero.position.x
    var noJumps = (this.hero.jumpingDirection.length === 0)
    var rightJump = (this.hero.jumpingDirection[this.hero.jumpingDirection.length -1] === 3)
    var leftJump = (this.hero.jumpingDirection[this.hero.jumpingDirection.length -1] === 2)

    if(heroFront >= passerbyBack && heroBack <= passerbyFront && this.hero.jumping === false){
      if(noJumps){
        this.hero.position.x = passerby.position.x - 110
      } else if (rightJump){
        this.hero.position.x = passerby.position.x - 110
      } else if (leftJump){
        this.hero.position.x = passerby.position.x + 110
      }
    } 

  }
}
