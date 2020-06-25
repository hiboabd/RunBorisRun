export default class Input {
  constructor(hero){
    this.hero = hero;
  }

  checkKey = (e) => {
      e = e || window.event;
      if (e.keyCode === 39) {
        this.hero.moveRight()
      } else if (e.keyCode === 37){
        this.hero.moveLeft()
      } else if (e.keyCode === 38){
        this.hero.jump()
      }
  };
}
