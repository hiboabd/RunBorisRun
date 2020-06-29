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
    var jumpDirection = input.history[input.history.length - 1]

    if(heroFront >= passerbyBack && heroBack <= passerbyFront && this.hero.jumping === false){
      this.hero.position.x = passerby.position.x - 106
    } else if (heroBack <= passerbyFront && heroFront >= passerbyBack && this.hero.jumping === false ){
      this.hero.position.x = passerby.position.x + 106
    }
  }
}
