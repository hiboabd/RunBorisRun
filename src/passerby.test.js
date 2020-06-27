import Passerby from '../src/passerby'

describe('Passerby', () => {
  test('current position', () => {
    const passerby = new Passerby();
    expect(passerby.position).toEqual({ x: 100, y: 730});
  })

})
