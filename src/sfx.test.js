import Sfx from "../src/sfx";
import Hero from '../src/hero';
import jumpMP3 from "../src/media/jump.mp3";
import bumpMP3 from "../src/media/bump.mp3";

describe('Sfx', () => {

  test('it plays jumpMP3 when hero is jumping', () => {
    const hero = new Hero();
    const audio = new Sfx(hero);
    hero.jumpSpeed = -10
    audio.gameSFX();
    expect(audio.jumpPlay).toBe(true);
  })

  test('it plays bumpMP3 when hero bumps into left boundary', () => {
    const hero = new Hero();
    const audio = new Sfx(hero);
    hero.position.x = -10
    audio.gameSFX();
    expect(audio.bumpPlay).toBe(true);
  })

})
