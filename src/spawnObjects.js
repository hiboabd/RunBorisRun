import Platform from '../src/platform'

export default class SpawnObjects {
  constructor(){
    this.platforms = [] //Arguements - image, x, y, height, width, movingSpeed:(optional)
  }

  spawn(){
    this.platforms.push(new Platform('./assets/grass_4x1.png', 1600, 600, 100, 200))
    this.platforms.push(new Platform('./assets/grass_4x1.png', 1850, 500, 100, 200))
    this.platforms.push(new Platform('./assets/grass_4x1.png', 2100, 500, 100, 200))
  }

  update(ctx){
    for (var i = 0; i < this.platforms.length; i++){
      this.platforms[i].draw(ctx)
      if (this.platforms[i].right < 0){ this._spawnRandomPlatform() }
    }
    this._removePlatforms()
  }

  _removePlatforms(){
    for (var i = 0; i < this.platforms.length; i++){
      if(this.platforms[i].right < 0) { this.platforms.splice(i, 1) }
    }
  }

  _spawnRandomPlatform(){
    var positions = [600, 500, 400]
    var random_y = Math.floor(Math.random() * 3) + 0
    this.platforms.push(new Platform('./assets/grass_4x1.png', 1600, positions[random_y], 100, 200))
  }
}
