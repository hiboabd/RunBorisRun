import DetectCollision from '../src/detectCollision'

describe('DetectCollision', () => {

  test('hitBottom prevents character from falling out of screen', () => {
    const hero = {
      position: {y: 800}, //set to 800 to mimic being in flight
      jumping: false
    }

    const detectCollision = new DetectCollision(hero);
    detectCollision.hitBottom()
    expect(hero.jumpSpeed).toEqual(0);
    expect(hero.position.y).toEqual(730);
  })

  test('hitEdge prevents character from moving out of right boundary', () => {
    const hero = {
      position: {x: 800}, //set to 800 to test right hand bounds
    }

    const detectCollision = new DetectCollision(hero);
    detectCollision.hitEdge()
    expect(hero.position.x).toEqual(750);
  })

  test('hitEdge prevents character from moving out of left boundary', () => {
    const hero = {
      position: {x: -50}, //set to -50 to test left hand bounds
    }

    const detectCollision = new DetectCollision(hero);
    detectCollision.hitEdge()
    expect(hero.position.x).toEqual(0);
  })

  test('hitPasserby prevents character from walking through passerby', () => {
    const hero = {
      position: {x: 600}, //set identical to passerby to mimic collision
      moveRight: function() {
        this.position.x += 1;
      }
    }

    const passerby = {
      position: {x: 600},
    }

    const detectCollision = new DetectCollision(hero);
    detectCollision.hitPasserby(passerby)
    expect(hero.position.x).toEqual(600);
  })

  

})
