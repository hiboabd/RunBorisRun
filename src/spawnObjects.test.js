import SpawnObjects from '../src/spawnObjects'

describe('spawnObjects', () => {

  test('platform is spawned', () => {
    const spawnObjects = new SpawnObjects()
    spawnObjects.spawn()

    const platform = spawnObjects.platforms[0]
    expect(platform.position).toEqual({ x: 1600, y: 600 });
  })

  test('passerby is spawned', () => {
    const spawnObjects = new SpawnObjects()
    spawnObjects.spawn()

    const passerby = spawnObjects.passerbyFloor[0]
    expect(passerby.position).toEqual({ x: 1500, y: 730 });
  })

  test('new platform is spawned in place of one going off canvas', () => {
    const spawnObjects = new SpawnObjects()
    spawnObjects.spawn()

    const platform = spawnObjects.platforms[0]
    platform.right = -10

    var ctx = {
      drawImage: function () {
        return 'changed'
      }
    };

    spawnObjects.update(ctx)

    const newPlatform = spawnObjects.platforms[0]
    expect(newPlatform.position.x).toEqual(1600);
  })

  test('new passerby is spawned in place of one going off canvas', () => {
    const spawnObjects = new SpawnObjects()
    spawnObjects.spawn()

    const passerby = spawnObjects.passerbyFloor[0]
    passerby.position.x = -100

    var ctx = {
      drawImage: function () {
        return 'changed'
      }
    };

    spawnObjects.update(ctx)

    const newPasserby = spawnObjects.passerbyFloor[0]
    expect(newPasserby.position.x).toBeGreaterThan(1450);
  })
})
