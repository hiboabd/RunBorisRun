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
      let platform = this.platforms[i]
      console.log(`Platform ${i} x position: ${platform.right}`);

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
  }
}
