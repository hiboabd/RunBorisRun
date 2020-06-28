
import jumpMP3 from "../src/media/jump.mp3"
import bumpMP3 from "../src/media/bump.mp3"



export default class Sfx{
  constructor(hero) {
    this.hero = hero
    this.jumpAudio = new Audio(jumpMP3);
    this.bump = new Audio(bumpMP3);
    this.jumpPlay = false;
    this.bumpPlay = false;
  }


  gameSFX = () => {
    if (this.hero.jumpSpeed === -10){
      this.jumpAudio.play();
      this.jumpPlay = true
    } else if (this.hero.position.x < 0){
      this.bump.play()
      this.bumpPlay = true
    }
  }

}
