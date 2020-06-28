export default class Background{
  constructor(){
    this.background = new Image()
    this.background.src = "/assets/london_background.png";
  }

  draw(ctx){
    ctx.drawImage(this.background,-400,0);
  }
}
