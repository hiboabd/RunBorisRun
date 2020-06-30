import Passerby from '../src/passerby'

export default class Score {

  constructor(){
    this.distance = 0
    this.infectionRate = 0
  }

 scoreUp(){
   this.distance += 1 / 60
 }

  infectionRateUp(hero){
    var number = hero.score.distance.toFixed(0)

    if(number < 10){
      this.infectionRate += 0.02
    } else if (number >= 10 && number < 20) {
      this.infectionRate += 0.05
    }else if (number >= 20 && number < 30) {
      this.infectionRate += 0.08
    }else if (number >= 30 && number < 40) {
      this.infectionRate += 0.11
    }else if (number >= 40 && number < 50) {
      this.infectionRate += 0.13
    } else {
      this.infectionRate += 0.13
    }
  }
}
