import Input from '../src/input'
import Hero from '../src/hero'

describe('Input', () => {

  let ctx;
  let hero;
  let input;

  beforeEach(async () => {
    ctx = {
      fillStyle: '',
      clearRect: function () {
        return 'changed'
      },
      fillRect: function () {
        return 'changed'
      }
    }
    hero = new Hero();
    input = new Input(hero, ctx);
  });

  test('check key calls hero moveRight function', () => {
  var e = {keyCode: 39, type: "keydown"}
    var currentPosition = hero.position.x
    input.checkKey(e)
    input.movePlayer()
    expect(hero.position.x).toBe(currentPosition + hero.SPEED)
  })

  test('check key calls hero moveLeft function', () => {
    var e = {keyCode: 37, type: "keydown"}
    var currentPosition = hero.position.x
    input.checkKey(e)
    input.movePlayer()
    expect(hero.position.x).toBe(currentPosition - hero.SPEED)
  })

  test('check key calls hero jump function', () => {
    var e = {keyCode: 38, type: "keydown"}
    input.checkKey(e)
    input.movePlayer()
    expect(hero.jumpSpeed).toBe(-15)
  })

  test('check key call changes muted to false', () => {
    var e = {keyCode: 78, type: "keydown"}
    input.checkKey(e)
    expect(input.muted).toBe(false)
  })

  test('check key call changes muted to true', () => {
    var e = {keyCode: 77, type: "keydown"}
    input.checkKey(e)
    expect(input.muted).toBe(true)
  })

  test('check key call changes paused to true', () => {
    var e = {keyCode: 80, type: "keydown"}
    input.checkKey(e)
    expect(input.paused).toBe(true)
  })

  test('check key call changes paused to false', () => {
    var e = {keyCode: 79, type: "keydown"}
    input.checkKey(e)
    expect(input.paused).toBe(false)
  })

})
