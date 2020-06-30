import Platform from '../src/platform'
import Passerby from '../src/passerby'

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
    this.passerbyFloor.push(new Passerby(1700))
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
  }

  _updatePasserby(ctx){
    for (var i = 0; i < this.passerbyFloor.length; i++){
      let passerby = this.passerbyFloor[i]
      // console.log(`Platform ${i} x position: ${platform.right}`);

      passerby.draw(ctx)
      passerby.animateSprite()
      if ((passerby.position.x + 64) < 0){
        this.passerbyFloor.splice(i, 1)



        var positions = [1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000]
        // var random_x = Math.floor(Math.random() * 1400) + 200
        var random_x = Math.floor(Math.random() * (positions.length)) + 0

        this.passerbyFloor.push(new Passerby(positions[random_x]))
      }
    }
  }
}
