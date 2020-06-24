import Hero from '../src/hero'

describe('Hero', () => {

  test('current position', () => {
    const hero = new Hero();
    expect(hero.position).toEqual({ x: 200, y: 200});
  })
})
