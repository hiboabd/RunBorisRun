
import Background from '../src/background'

describe('Background', () => {

  test('it creates the background Image', () => {
    const image = new Background
    expect(image.background).toBeInstanceOf(Image)
  })

})
