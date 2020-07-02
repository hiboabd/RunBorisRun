import Hero from '../src/hero'
import DetectCollision from '../src/detectCollision'
import Score from '../src/score'
import Background from '../src/background'
import Platform from '../src/platform'

describe('Hero', () => {

  let hero;
  let ctx;
  let currentPositionX;
  let currentPositionY;

  beforeEach(() => {
    hero = new Hero()
    currentPositionX = hero.position.x
    currentPositionY = hero.position.y
  });

  test('current position', () => {
    expect(hero.position).toEqual({ x: 50, y: 630});
  })

  test('moves right', () => {
    hero.moveRight()
    expect(hero.position.x).toEqual(currentPositionX + hero.SPEED)
    expect(hero.frameY).toEqual(3)
  })

  test('moves left', () => {
    hero.moveLeft()
    expect(hero.position.x).toEqual(currentPositionX - hero.SPEED)
    expect(hero.frameY).toEqual(2)
  })

  test('jumps straight', () => {
    hero.jump()
    hero.airBorne()
    expect(hero.position.y).toBeLessThan(currentPositionY);
  })

  test('jumps diagonally', () => {
    hero.jump()
    hero.airBorne()
    hero.moveRight()
    expect(hero.position.y).toBeLessThan(currentPositionY);
    expect(hero.position.x).toBeGreaterThan(currentPositionX);
  })

  test('draw calls draw image function', () => {
    let ctx = {
      fillStyle: '',
      clearRect: function () { return 'changed' },
      fillRect:  function () { return 'changed' },
      drawImage: function () { return 'changed' }
    }
    expect(hero.draw(ctx)).toEqual('changed')
  })

  test("Animate Sprite when jump called", () => {
    hero.jump()
    expect(hero.frameX).toEqual(1) //?
    expect(hero.frameY).toEqual(3)
  })

  test("Animate Sprite for moveRight ", () => {
    hero.moveRight()
    expect(hero.frameY).toEqual(3)
    expect(hero.increment).toEqual(0.1)
  });

  test("Increment in animate sprite goes to 0 when reaches 2", () => {
    hero.increment = 2.1
    hero.moveRight()
    expect(hero.increment).toEqual(0)
  })

  test("Score goes up when hero moves right", () => {
    const background = new Background()
    const platform = [new Platform()]
    hero.position.x = 800
    const detectCollision = new DetectCollision(hero, platform, background)
    detectCollision.hitEdge()
    expect(Score.distance).toEqual(1 / 60);
  })
})
