import SpawnObjects from '../src/spawnObjects'

describe('spawnObjects', () => {

  let platform;
  let passerby;
  let spawnObjects;
  let ctx;

  beforeEach(async () => {
    spawnObjects = new SpawnObjects()
    spawnObjects.spawn()
    
    platform     = spawnObjects.platforms[0]
    passerby     = spawnObjects.passerbyFloor[0]
    ctx          = { drawImage: function () { return 'changed' } }
  });

  test('platform is spawned', () => {
    expect(platform.position).toEqual({ x: 0, y: 700 });
  })

  test('passerby is spawned', () => {
    expect(passerby.position).toEqual({ x: 1500, y: 628 });
  })

  test('new platform is spawned in place of one going off canvas', () => {
    platform.position.x = -1600
    spawnObjects.update(ctx)

    let newPlatfomrm = spawnObjects.platforms.pop()
    expect(newPlatfomrm.left).toBeGreaterThan(1450);
  })

  test('new passerby is spawned in place of one going off canvas', () => {
    passerby.position.x = -100
    spawnObjects.update(ctx)

    let newPasserby = spawnObjects.passerbyFloor.pop()
    expect(newPasserby.position.x).toBeGreaterThan(1450);
  })
})
