import Hero from '../src/hero'

describe('Hero', () => {

  test('current position', () => {
    const hero = new Hero();
    expect(hero.position).toEqual({ x: 200, y: 200});
  })

  test('moves right', () => {
    const hero = new Hero();
    var current_x_position = hero.position.x
    hero.moveRight()
    expect(hero.position.x).toEqual(current_x_position + hero.SPEED)
  })
})
