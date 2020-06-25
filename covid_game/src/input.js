export default class Input {
  constructor(hero, ctx){
    this.hero = hero;
    this.ctx = ctx;
  }

  refresh = () => {
    this.ctx.clearRect(0, 0, 800, 600);
    this.hero.draw(this.ctx)
  };

  checkKey = (e) => {
      e = e || window.event;
      if (e.keyCode === 39) {
        this.hero.moveRight()
      } else if (e.keyCode === 37){
        this.hero.moveLeft()
      } else if (e.keyCode === 38){
        this.hero.jump()
      }
     this.refresh()
  };
}
