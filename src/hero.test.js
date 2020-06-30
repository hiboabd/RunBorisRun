import Hero from '../src/hero'

describe('Hero', () => {

  test('current position', () => {
    const hero = new Hero();
    expect(hero.position).toEqual({ x: 50, y: 730});
  })

  test('moves right', () => {
    const hero = new Hero();
    var current_x_position = hero.position.x
    hero.moveRight()
    expect(hero.position.x).toEqual(current_x_position + hero.SPEED)
    expect(hero.frameY).toEqual(3)
  })

  test('moves left', () => {
    const hero = new Hero();
    var current_x_position = hero.position.x
    hero.moveLeft()
    expect(hero.position.x).toEqual(current_x_position - hero.SPEED)
    expect(hero.frameY).toEqual(2)
  })

  test('jumps straight', () => {
    var ctx = {
      fillStyle: '',
      clearRect: function () {
        return 'changed'
      },
      fillRect: function () {
        return 'changed'
      },
      drawImage: function () {
        return 'changed'
      }
    }
    const hero = new Hero();
    hero.draw(ctx)
    var current_y_position = hero.position.y
    hero.jump()
    hero.airBorne()
    expect(hero.position.y).toBeLessThan(current_y_position);
  })

  test('jumps diagonally', () => {
    var ctx = {
      fillStyle: '',
      clearRect: function () {
        return 'changed'
      },
      fillRect: function () {
        return 'changed'
      },
      drawImage: function () {
        return 'changed'
      }
    }
    const hero = new Hero();
    hero.draw(ctx)
    var current_y_position = hero.position.y
    var current_x_position = hero.position.x
    hero.jump()
    hero.airBorne()
    hero.moveRight()
    expect(hero.position.y).toBeLessThan(current_y_position);
    expect(hero.position.x).toBeGreaterThan(current_x_position);
  })

  test('draw calls draw image function', () => {
    var ctx = {
      fillStyle: '',
      clearRect: function () {
        return 'changed'
      },
      fillRect: function () {
        return 'changed'
      },
      drawImage: function () {
        return 'changed'
      }
    }
    const hero = new Hero();
    expect(hero.draw(ctx)).toEqual('changed')
  })

  test("Animate Sprite when jump called", () => {
    const hero = new Hero()
    // 0
    hero.jump()
    expect(hero.frameX).toEqual(1) //?
    expect(hero.frameY).toEqual(3)
  })

  test("Animate Sprite for moveRight ", () => {
    const hero = new Hero()
    hero.moveRight()
    expect(hero.frameY).toEqual(3)
    expect(hero.increment).toEqual(0.1)
  });

  test("Increment in animate sprite goes to 0 when reaches 2", () => {
    const hero = new Hero()
    hero.increment = 2

    hero.moveRight()
    hero.moveRight()
    expect(hero.increment).toEqual(0)
  })

  test("Score goes up when hero moves right", () => {
    const hero = new Hero()
    hero.moveRight()
    expect(hero.score).toEqual(1 / 60);
  })
})
