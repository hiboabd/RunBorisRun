import Platform from '../src/platform'
import Passerby from '../src/passerby'
import Score from '../src/score'

export default class SpawnObjects {
  constructor(){
    this.platforms = [] //Arguements - image, x, y, height, width, movingSpeed:(optional)
    this.passerbyFloor = []
  }

  spawn(){
    this.platforms.push(new Platform( './assets/pavement.png', 0, 700, 100, 1600))
    this.passerbyFloor.push(new Passerby("./assets/old_sprite.png", 1500))
    this.passerbyFloor.push(new Passerby("./assets/pink_sprite.png",1900))
    this.passerbyFloor.push(new Passerby("./assets/orange_sprite.png", 2000))
  }

  update(ctx){
    this._updatePlatforms(ctx)
    this._updatePasserby(ctx)
    this._updateLevelUpPasserby()
  }

  //Platforms -------------------
  _updatePlatforms(ctx){
    for (var i = 0; i < this.platforms.length; i++){
      this.platforms[i].draw(ctx)
      if (this.platforms[i].right < 1500 && this.platforms[i].top == 700){
        if (this.platforms.length < 2){
          this._spawnPlatforms()
        }
      }
    }
    this._removePlatforms()
  }

  _spawnPlatforms(){
    let random = Math.floor(Math.random() * (5)) + 0

    if (random == 0){
      this.platforms.push(new Platform('./assets/pavement.png', 1600, 500, 100, 200))
      this.platforms.push(new Platform('./assets/pavement.png', 1900, 700, 100, 1600))
    }

    if (random == 1){
      this.platforms.push(new Platform('./assets/pavement.png', 1600, 500, 100, 200))
      this.platforms.push(new Platform('./assets/pavement.png', 1900, 500, 100, 200))
      this.platforms.push(new Platform('./assets/pavement.png', 2300, 700, 100, 1600))
    }

    if (random == 2){
      this.platforms.push(new Platform('./assets/pavement.png', 1600, 500, 100, 200))
      this.platforms.push(new Platform('./assets/pavement.png', 1700, 300, 100, 200))
      this.platforms.push(new Platform('./assets/pavement.png', 2300, 700, 100, 1600))
    }

    if (random == 3){
      this.platforms.push(new Platform('./assets/pavement.png', 1600, 700, 100, 400))
      this.platforms.push(new Platform('./assets/pavement.png', 2200, 700, 100, 1600))
    }

    if (random == 4){
      this.platforms.push(new Platform('./assets/pavement.png', 1600, 700, 100, 1600))
      this.platforms.push(new Platform('./assets/pavement.png', 2300, 500, 100, 200))
      this.platforms.push(new Platform('./assets/pavement.png', 3500, 700, 100, 1600))
    }
  }


  _spawnRandomPlatform(){
    //var positions = [600, 500, 400]
    //var random_y = Math.floor(Math.random() * 3) + 0

  }

  _removePlatforms(){
    for (var i = 0; i < this.platforms.length; i++){
      if(this.platforms[i].right < 0) { this.platforms.splice(i, 1) }
    }
  }
//-----------------------------

// Passerby -------------------
    _updatePasserby(ctx){
    for (var i = 0; i < this.passerbyFloor.length; i++){
      let passerby = this.passerbyFloor[i]

      passerby.draw(ctx)
      if (passerby.position.x + 64 < 0 || this.passerbyFloor[i].position.y > 800){
        this._spawnRandomPasserby() }
    }
     this._removePasserby()
  }

  _spawnRandomPasserby(){
    var positions = [1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000]
    var random_x = Math.floor(Math.random() * (positions.length)) + 0
    var passerbyArray = ['./assets/old_sprite.png','./assets/pink_sprite.png','./assets/orange_sprite.png']
    var random_colour = Math.floor(Math.random() * (3)) + 0
    console.log(random_colour)
    var random = passerbyArray[random_colour]

    this.passerbyFloor.push(new Passerby(random, positions[random_x]))
  }

  _removePasserby(){
    for (var i = 0; i < this.passerbyFloor.length; i++){
      if(this.passerbyFloor[i].position.x + 64 < 0 ||
         this.passerbyFloor[i].position.y > 800) { this.passerbyFloor.splice(i, 1) }
    }
  }

 _updateLevelUpPasserby() {
    var number = Score.distance.toFixed(0)

    if(number === '10') {
      if(this.passerbyFloor.length < 4){this.passerbyFloor.push(new Passerby("./assets/old_sprite.png", 1600))}
    }else if (number === '20') {
      if(this.passerbyFloor.length < 5){this.passerbyFloor.push(new Passerby("./assets/pink_sprite.png", 1600))}
    }else if (number === '30') {
      if(this.passerbyFloor.length < 6){this.passerbyFloor.push(new Passerby("./assets/orange_sprite.png", 1600))}
  }

  }
  //-----------------------------
}
