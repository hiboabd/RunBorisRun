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
    this._updatePlatforms(ctx)
    this._updatePasserby(ctx)
  }

  _updatePlatforms(ctx){
    for (var i = 0; i < this.platforms.length; i++){
      this.platforms[i].draw(ctx)
      if (this.platforms[i].right < 0){ this._spawnRandomPlatform() }
    }
    this._removePlatforms()
  }

  _spawnRandomPlatform(){
    var positions = [600, 500, 400]
    var random_y = Math.floor(Math.random() * 3) + 0
    this.platforms.push(new Platform('./assets/grass_4x1.png', 1600, positions[random_y], 100, 200))
  }

  _removePlatforms(){
    for (var i = 0; i < this.platforms.length; i++){
      if(this.platforms[i].right < 0) { this.platforms.splice(i, 1) }
    }
  }

  _updatePasserby(ctx){
    for (var i = 0; i < this.passerbyFloor.length; i++){
      this.passerbyFloor[i].draw(ctx)
      if ((this.passerbyFloor[i].position.x + 64) < 0){ this._spawnRandomPasserby() }
    }
    this._removePasserby()
  }

  _spawnRandomPasserby(){
    var positions = [1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000]
    var random_x = Math.floor(Math.random() * (positions.length)) + 0
    this.passerbyFloor.push(new Passerby(positions[random_x]))
  }

  _removePasserby(){
    for (var i = 0; i < this.passerbyFloor.length; i++){
      if(this.passerbyFloor[i].position.x + 64 < 0) { this.passerbyFloor.splice(i, 1) }
    }
  }
}
