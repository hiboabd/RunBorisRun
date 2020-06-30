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
})
