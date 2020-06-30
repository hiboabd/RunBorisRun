import Input from '../src/input'
import Hero from '../src/hero'

describe('Input', () => {

  test('check key calls hero moveRight function', () => {
    var ctx = {
      fillStyle: '',
      clearRect: function () {
        return 'changed'
      },
      fillRect: function () {
        return 'changed'
      }
    }
    const hero = new Hero();
    const input = new Input(hero, ctx);
    var e = {keyCode: 39, type: "keydown"}
    var currentPosition = hero.position.x
    input.checkKey(e)
    input.movePlayer()
    expect(hero.position.x).toBe(currentPosition + hero.SPEED)
  })

  test('check key calls hero moveLeft function', () => {
    var ctx = {
      fillStyle: '',
      clearRect: function () {
        return 'changed'
      },
      fillRect: function () {
        return 'changed'
      }
    }
    const hero = new Hero();
    const input = new Input(hero, ctx);

    var e = {keyCode: 37, type: "keydown"}
    var currentPosition = hero.position.x
    input.checkKey(e)
    input.movePlayer()
    expect(hero.position.x).toBe(currentPosition - hero.SPEED)
  })

  test('check key calls hero jump function', () => {
    var ctx = {
      fillStyle: '',
      clearRect: function () {
        return 'changed'
      },
      fillRect: function () {
        return 'changed'
      }
    }
    const hero = new Hero();
    const input = new Input(hero, ctx);

    var e = {keyCode: 38, type: "keydown"}

    input.checkKey(e)
    input.movePlayer()
    expect(hero.jumpSpeed).toBe(-15)
  })

  test('check key call toggles  function', () => {
    var ctx = {
      fillStyle: '',
      clearRect: function () {
        return 'changed'
      },
      fillRect: function () {
        return 'changed'
      }
    }
    const hero = new Hero();
    const input = new Input(hero, ctx);

    var e = {keyCode: 38, type: "keydown"}

    input.checkKey(e)
    input.movePlayer()
    expect(hero.jumpSpeed).toBe(-15)
  })
  test('check key call toggles muted to false', () => {
    var ctx = {
      fillStyle: '',
      clearRect: function () {
        return 'changed'
      },
      fillRect: function () {
        return 'changed'
      }
    }
    const hero = new Hero();
    const input = new Input(hero, ctx);

    var e = {keyCode: 37, type: "keydown"}

    input.checkKey(e)

    expect(input.muted).toBe(false)
  })

  test('check key call toggles muted to true', () => {
    var ctx = {
      fillStyle: '',
      clearRect: function () {
        return 'changed'
      },
      fillRect: function () {
        return 'changed'
      }
    }
    const hero = new Hero();
    const input = new Input(hero, ctx);

    var e = {keyCode: 77, type: "keydown"}

    input.checkKey(e)

    expect(input.muted).toBe(true)
  })


})
