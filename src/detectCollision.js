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
    var heroFront = this.hero.position.x + 64
    var jumpDirection = input.history[input.history.length - 1]
    console.log(jumpDirection)

    if(heroFront >= passerby.position.x && this.hero.position.x <= passerbyFront && this.hero.jumping === false){
      console.log("collision")
      if(heroFront <= (passerby.position.x + 2) ||
      (heroFront >= passerby.position.x  && heroFront <= passerby.position.x - 2) ){
        if(jumpDirection === 'r'){
          this.hero.position.x = passerby.position.x - 64
        } else {
          this.hero.position.x = passerby.position.x + 64
        }
      } else if(this.hero.position.x <= passerbyFront
      || this.hero.position.x === passerbyFront ){
        if(jumpDirection === 'l'){
          this.hero.position.x = passerbyFront
        } else {
          this.hero.position.x = passerby.position.x - 64
        }

      } else{
        console.log("we have failed :(")
      }
    }

  }

}
