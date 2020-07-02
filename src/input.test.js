import Input from '../src/input'
import Hero from '../src/hero'

describe('Input', () => {

  let ctx;
  let hero;
  let input;

  beforeEach(async () => {
    ctx = {
      fillStyle: '',
      clearRect: function () { return 'changed' },
      fillRect:  function () { return 'changed' }
    }
    hero = new Hero();
    input = new Input(hero, ctx);
  });

  function keyAction(key, move=false){
    var e = {keyCode: key, type: "keydown"}
    input.checkKey(e)
    if(move) { input.movePlayer() }
  }

  test('check key calls hero moveRight function', () => {
    var currentPosition = hero.position.x
    keyAction(39, true)
    expect(hero.position.x).toBe(currentPosition + hero.SPEED)
  })

  test('check key calls hero moveLeft function', () => {
    var currentPosition = hero.position.x
    keyAction(37, true)
    expect(hero.position.x).toBe(currentPosition - hero.SPEED)
  })

  test('check key calls hero jump function', () => {
    keyAction(38)
    expect(hero.jumpSpeed).toBe(-15)
  })

  test('check key call changes muted to false', () => {
    keyAction(78)
    expect(input.muted).toBe(false)
  })

  test('check key call changes muted to true', () => {
    keyAction(77)
    expect(input.muted).toBe(true)
  })

  test('check key call changes paused to true', () => {
    keyAction(80)
    expect(input.paused).toBe(true)
  })

  test('check key call changes paused to false', () => {
    keyAction(79)
    expect(input.paused).toBe(false)
  })

})
