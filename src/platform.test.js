import Platform from '../src/platform'

describe('Platform', () => {
  test('has a position on canvas', () => {
    const platform = new Platform('./assets/grass_4x1.png', 300, 300)
    expect(platform.position.x).toEqual(300)
    expect(platform.position.y).toEqual(300)
    expect(platform.img).toEqual('./assets/grass_4x1.png')
  })
})
