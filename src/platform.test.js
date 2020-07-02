import Platform from '../src/platform'

describe('Platform', () => {

  let platform

  beforeEach(async () => {
    platform = new Platform('./assets/grass_4x1.png', 300, 300)
  });

  test('has a position on canvas', () => {
    expect(platform.position.x).toEqual(300)
    expect(platform.position.y).toEqual(300)
    expect(platform.image.src).toEqual('http://localhost/assets/grass_4x1.png')
  })

  test('draw function creates platform for canvas', () => {
    var ctx = { drawImage: function () { return 'changed' } }
    expect(platform.draw(ctx)).toEqual('changed')
  })
})
