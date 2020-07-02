import Sfx from "../src/sfx";
import Hero from '../src/hero';
import Input from '../src/input'
import jumpMP3 from "../src/media/jump.mp3";
import bumpMP3 from "../src/media/bump.mp3";
import music from "../src/media/bgm.mp3"

describe('Sfx', () => {

  let hero;
  let input;
  let audio;

  beforeEach(async () => {
    window.HTMLMediaElement.prototype.play = () => { /* do nothing */ };
    window.HTMLMediaElement.prototype.pause = () => { /* do nothing */ };
    hero = new Hero();
    input = new Input()
    audio = new Sfx(hero, input);
  });

  test('it plays jumpMP3 when hero is jumping', () => {
    hero.jumpSpeed = -10
    audio.gameSFX();
    expect(audio.jumpPlay).toBe(true);
  })

  test('it plays bumpMP3 when hero bumps into left boundary', () => {
    hero.position.x = -10
    audio.gameSFX();
    expect(audio.bumpPlay).toBe(true);
  })

  test('it plays background music', () => {
    audio.gameMusic();
    expect(audio.musicPlay).toBe(true)
  })

  test('when muted it doesnt play jumpMP3 when hero is jumping', () => {
    input.muted = true
    hero.jumpSpeed = -10
    audio.gameSFX();
    expect(audio.jumpPlay).toBe(false);
  })

  test('when muted it doesnt play bumpMP3 when hero bumps into left boundary', () => {
    input.muted = true
    hero.position.x = -10
    audio.gameSFX();
    expect(audio.bumpPlay).toBe(false);
  })

  test('when muted it doesnt play background music', () => {
    input.muted = true
    audio.gameMusic();
    expect(audio.musicPlay).toBe(false)
  })

})
