import DetectCollision from '../src/detectCollision'
import Hero from '../src/hero'
import Platform from '../src/platform'
import Backround from '../src/background'

describe('DetectCollision', () => {

  let hero;
  let platform;
  let background;
  let detectCollision;
  let ctx;

  beforeEach(async () => {
    hero            = new Hero()
    platform        = new Platform()
    background      = new Backround()
    ctx             = { drawImage: function () { return 'changed' } }
    detectCollision = new DetectCollision(hero, [platform], background);
  });

  test('hitBottom prevents character from falling out of screen', () => {
    hero.position.y = 800
    hero.jumping    = false
    detectCollision.hitBottom()
    expect(hero.position.y).toEqual(730);
  })

  test('hitEdge prevents character from moving out of right boundary', () => {
    hero.position.x = 800
    detectCollision.hitEdge()
    expect(hero.position.x).toEqual(750);
  })

  test('hitEdge prevents character from moving out of left boundary', () => {
    hero.position.x = -50
    detectCollision.hitEdge()
    expect(hero.position.x).toEqual(0);
  })

  test('Hero touches platform', () => {
    hero.position     = { x: 320, y: 430}
    platform.position = { x: 300, y: 500}
    platform.width    = 500
    platform.height   = 100

    hero.draw(ctx)
    platform.draw(ctx)

    detectCollision.hitPlatform()
    expect(detectCollision.touching).toEqual(true)
  })
})
