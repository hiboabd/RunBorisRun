import Score from '../src/score'

import jumpMP3 from "../src/media/jump.mp3"
import bumpMP3 from "../src/media/bump.mp3"
import music from "../src/media/bgm.mp3"
import stayAtHome from "../src/media/stayAtHome.mp3"
import hit from "../src/media/hit.mp3"

export default class Sfx{
  constructor(hero, input) {
    this.hero = hero;
    this.input = input
    this.jumpAudio = new Audio(jumpMP3);
    this.bump = new Audio(bumpMP3);
    this.music = new Audio(music);
    this.jumpPlay = false;
    this.bumpPlay = false;
    this.musicPlay = false;
    this.stayAtHome = new Audio(stayAtHome);
    this.hit = new Audio(hit);
  };

  gameSFX = () => {
    if (this.hero.jumpSpeed === -10 && this.input.muted === false){
      this.jumpAudio.play();
      this.jumpPlay = true;
    } else if (this.hero.position.x < 0 && this.input.muted === false){
      this.bump.play();
      this.bumpPlay = true;
    }
  };

  gameMusic = () => {
    if (this.input.muted === false){
    this.music.loop = true
    this.music.play();
    this.musicPlay = true;
  }else if (this.input.muted === true){
    this.music.pause()
    this.musicPlay = false;
  }
  };

}
