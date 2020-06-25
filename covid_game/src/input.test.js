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
    var e = {keyCode: 39}
    input.checkKey(e)
    expect(input.hero.position.x).toEqual(60)
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
    var e = {keyCode: 37}
    input.checkKey(e)
    expect(input.hero.position.x).toEqual(40)
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
    var e = {keyCode: 38}
    input.checkKey(e)
    expect(input.hero.position.y).toEqual(490)
  })

  // test('refresh function clears previous rectangle position', () => {
  //   var ctx = {
  //     fillStyle: '',
  //     clearRect: function () {
  //       return 'changed'
  //     },
  //     fillRect: function () {
  //       return 'changed'
  //     }
  //   }
  //   const hero = new Hero();
  //   const input = new Input(hero, ctx);
  //   input.refresh()
  //   expect(input.ctx.clearRect).toHaveBeenCalled()
  // })
})
