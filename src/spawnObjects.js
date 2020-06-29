import Platform from '../src/platform'

export default class SpawnObjects {
  constructor(){
    this.platforms = [] //Arguements - image, x, y, height, width, movingSpeed:(optional)
  }

  spawn(){
    var positions = [450, 550, 750]
    for (var i = 0; i < 3; i++){
      var random_x = Math.floor(Math.random() * 1400) + 200
      var random_y = Math.floor(Math.random() * 2) + 0

      this.platforms.push(new Platform('./assets/grass_4x1.png', random_x, positions[random_y], 100, 200))
    }
  }

  update(ctx){
    for (var i = 0; i < this.platforms.length; i++){
      this.platforms[i].draw(ctx)
      this.platforms[i].move()
    }
  }
}
