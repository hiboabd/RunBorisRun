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
    expect(input.up).toBe(true)
  })

  test('checks that player can move right', () => {

    const hero = {
     moveRight() {
       return "moved";
     },
   };

  const spy = jest.spyOn(hero, 'moveRight');
  var input = new Input(hero)
  input.right = true
  input.movePlayer()

  expect(spy).toHaveBeenCalledTimes(1);
  });


  test('checks that player can move left', () => {

    const hero = {
     moveLeft() {
       return "moved";
     },
   };

  const spy = jest.spyOn(hero, 'moveLeft');
  var input = new Input(hero)
  input.left = true
  input.movePlayer()

  expect(spy).toHaveBeenCalledTimes(1);
  });


  test('checks that player can jump', () => {

    const hero = {
     jumping: false,
     jump: function(){
       return "moved";
     },
   };

  const spy = jest.spyOn(hero, 'jump');
  var input = new Input(hero)
  input.up = true
  input.movePlayer()

  expect(spy).toHaveBeenCalledTimes(1);
  });

  test('if player is not moving, hero is at frame 0', () => {

    const hero = {
     frameX: 1,
   };

   var input = new Input(hero)
   input.up = false
   input.right = false
   input.left = false
   input.movePlayer()
   expect(hero.frameX).toEqual(0);

 })

})
