import Hero from '../src/hero'

describe('Hero', () => {

  test('current position', () => {
    const hero = new Hero();
    expect(hero.position).toEqual({ x: 50, y: 550});
  })

  test('moves right', () => {
    const hero = new Hero();
    var current_x_position = hero.position.x
    hero.moveRight()
    expect(hero.position.x).toEqual(current_x_position + hero.SPEED)
  })

  test('moves left', () => {
    const hero = new Hero();
    var current_x_position = hero.position.x
    hero.moveLeft()
    expect(hero.position.x).toEqual(current_x_position - hero.SPEED)
  })

  test('jumps', () => {
    var ctx = {
      fillStyle: '',
      clearRect: function () {
        return 'changed'
      },
      fillRect: function () {
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

  test('draw function', () => {
    var ctx = {
      fillStyle: '',
      clearRect: function () {
        return 'changed'
      },
      fillRect: function () {
        return 'changed'
      }
    }
    const hero = new Hero();
    hero.draw(ctx)
    expect(ctx.fillStyle).toEqual('#0ff')
  })
})
