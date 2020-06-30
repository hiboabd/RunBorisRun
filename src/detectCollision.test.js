import DetectCollision from '../src/detectCollision'
import Hero from '../src/hero'
import Platform from '../src/platform'
import Backround from '../src/background'

describe('DetectCollision', () => {

  test('hitBottom prevents character from falling out of screen', () => {
    const hero = {
      position: {y: 800}, //set to 800 to mimic being in flight
      jumping: false
    }

    const detectCollision = new DetectCollision(hero);
    detectCollision.hitBottom()
    expect(hero.position.y).toEqual(730);
  })

  test('hitEdge prevents character from moving out of right boundary', () => {
    const hero = new Hero()
    const platform = new Platform()
    const background = new Backround()
    const detectCollision = new DetectCollision(hero, platform, background);
        hero.position.x = 800
    detectCollision.hitEdge()
    expect(hero.position.x).toEqual(750);
  })

  test('hitEdge prevents character from moving out of left boundary', () => {
    const hero = {
      position: {x: -50}, //set to -50 to test left hand bounds
    }

    const platform = new Platform()
    const background = new Backround()
    const detectCollision = new DetectCollision(hero, platform, background);
    detectCollision.hitEdge()
    expect(hero.position.x).toEqual(0);
  })


  // test('hitPasserby prevents character from walking through passerby', () => {
  //   const hero = {
  //     position: {x: 600}, //set identical to passerby to mimic collision
  //     moveRight: function() {
  //       this.position.x += 1;
  //     }
  //   }
  //
  //   const passerby = {
  //     position: {x: 600},
  //   }

  //   const detectCollision = new DetectCollision(hero);
  //   detectCollision.hitPasserby(passerby)
  //   expect(hero.position.x).toEqual(600);
  // })

  test('Hero touches platform', () => {
    const hero     = { top: 430, bottom: 502, left: 340, right: 364,
                       position: {x: 320, y: 430}, SCALED_HEIGHT: 72, SCALED_WIDTH: 64 }
    const platform = [{ top: 500, bottom: 600, left: 300, right: 800,
                        position: {x: 300, y: 500}, width: 500, height: 100 }]

    const detectCollision = new DetectCollision(hero, platform);
    detectCollision.hitPlatform()

    expect(detectCollision.touching).toEqual(true)
  })

})
