export default class Input {
  constructor(hero, ctx, background){
    this.hero = hero;
    this.background = background
    this.ctx = ctx;
  }

  refresh = () => {
    this.ctx.clearRect(0, 0, 800, 600);
    this.background.draw(this.ctx)
    this.hero.draw(this.ctx)
  };

  checkKey = (e) => {
      e = e || window.event;
      if (e.keyCode === 39) {
        this.hero.moveRight()
      } else if (e.keyCode === 37){
        this.hero.moveLeft()
      }
     this.refresh()
  };
}
