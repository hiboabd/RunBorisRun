import Passerby from "./passerby"

export default class Levels{
  constructor(hero){
     this.distance = hero.score.distance
  }

  levelUp(){
    if (this.distance === 10 ) {
      Passerby.speed ++
    }
  }



}
