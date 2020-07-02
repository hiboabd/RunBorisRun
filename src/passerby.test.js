import Passerby from '../src/passerby'

describe('Passerby', () => {

  let passerby;

  beforeEach(async () => {
    passerby = new Passerby(1400)
  });

  test('current position', () => {
    expect(passerby.position.x).toEqual(1400);
  })

  test('draw function calls drawImage function of ctx object', () => {
    const ctx = { drawImage: function () { return 'changed' } };
    const spy = jest.spyOn(ctx, 'drawImage');
    passerby.draw(ctx)
    expect(spy).toHaveBeenCalledTimes(1);
  })
})
