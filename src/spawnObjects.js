import Platform from '../src/platform'
import Passerby from '../src/passerby'
import Score from '../src/score'

export default class SpawnObjects {
  constructor(){
    this.platforms = [] //Arguements - image, x, y, height, width, movingSpeed:(optional)
    this.passerbyFloor = []
  }

  spawn(){
    this.platforms.push(new Platform('./assets/grass_4x1.png', 1600, 600, 100, 200))
    this.platforms.push(new Platform('./assets/grass_4x1.png', 1850, 500, 100, 200))
    this.platforms.push(new Platform('./assets/grass_4x1.png', 2100, 500, 100, 200))
    this.passerbyFloor.push(new Passerby(1500))
    this.passerbyFloor.push(new Passerby(1900))
    this.passerbyFloor.push(new Passerby(2000))
  }

  update(ctx){
    for (var i = 0; i < this.platforms.length; i++){
      let platform = this.platforms[i]
      // console.log(`Platform ${i} x position: ${platform.right}`);

      platform.draw(ctx)
      platform.move()
      if (platform.right < 0){
        this.platforms.splice(i, 1)

        var positions = [600, 500, 400]
        // var random_x = Math.floor(Math.random() * 1400) + 200
        var random_y = Math.floor(Math.random() * 3) + 0

        this.platforms.push(new Platform('./assets/grass_4x1.png', 1600, positions[random_y], 100, 200))
      }
    }
    this._updatePasserby(ctx)
    this._updateLevelUpPasserby()
  }

  _updatePasserby(ctx){
    for (var i = 0; i < this.passerbyFloor.length; i++){
      let passerby = this.passerbyFloor[i]
      // console.log(`Platform ${i} x position: ${platform.right}`);

      passerby.draw(ctx)
      passerby.animateSprite()
      if ((passerby.position.x + 64) < 0){
        this.passerbyFloor.splice(i, 1)

        var positions = [1500, 1700, 2400, 2700, 3000]
        // var random_x = Math.floor(Math.random() * 1400) + 200
        var random_x = Math.floor(Math.random() * (positions.length)) + 0

        this.passerbyFloor.push(new Passerby(positions[random_x]))
      }
    }
  }

  _updateLevelUpPasserby() {
    var number = Score.distance.toFixed(0)

    if(number === '10') {
      if(this.passerbyFloor.length < 4){this.passerbyFloor.push(new Passerby(1600))}
    }else if (number === '20') {
      if(this.passerbyFloor.length < 5){this.passerbyFloor.push(new Passerby(1600))}
    }else if (number === '30') {
      if(this.passerbyFloor.length < 6){this.passerbyFloor.push(new Passerby(1600))}
    }
  }
}
