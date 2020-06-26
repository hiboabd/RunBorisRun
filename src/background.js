export default class Background{
  constructor(){
    this.background = new Image()
    this.background.src = "/assets/background2.png";
  }

  draw(ctx){
    ctx.drawImage(this.background,0,0, 3000, 800);
  }
}