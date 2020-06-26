import DetectCollision from '../src/detectCollision'

describe('DetectCollision', () => {

  test('hitBottom prevents character from falling out of screen', () => {
    const hero = {
      position: {y: 800}, //set to 800 to mimic being in flight
      jumping: false
    }

    const detectCollision = new DetectCollision(hero);
    detectCollision.hitBottom()
    expect(hero.jumpSpeed).toEqual(0);
    expect(hero.position.y).toEqual(730);
  })

  test('hitEdge prevents character from moving out of right boundary', () => {
    const hero = {
      position: {x: 800}, //set to 800 to test right hand bounds
    }

    const detectCollision = new DetectCollision(hero);
    detectCollision.hitEdge()
    expect(hero.position.x).toEqual(750);
  })

  test('hitEdge prevents character from moving out of left boundary', () => {
    const hero = {
      position: {x: -50}, //set to -50 to test left hand bounds
    }

    const detectCollision = new DetectCollision(hero);
    detectCollision.hitEdge()
    expect(hero.position.x).toEqual(0);
  })

  test('Hero touches platform', () => {
    const hero =     { position: {x: 280, y: 510} }
    const platform = { position: {x: 300, y: 500} }

    const detectCollision = new DetectCollision(hero);
    detectCollision.hitPlatform()
    expect(hero.position.y).toEqual(platform.position.y)
  })

})
