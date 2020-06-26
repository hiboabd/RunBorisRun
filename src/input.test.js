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
    input.checkKey(e)
    expect(input.right).toBe(true)
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

    input.checkKey(e)
    expect(input.left).toBe(true)
  })
})
