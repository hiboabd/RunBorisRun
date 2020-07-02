import Passerby from '../src/passerby'

export default class Score {

  // constructor(){
  //   this.distance = 0
  //   this.infectionRate = 0
  // }
  static distance = 0
  static infectionRate = 0


 static scoreUp(){
   Score.distance += 1 / 60
 }

 static infectionRateUp(){
    var number = this.distance.toFixed(0)
    var startRate = 0.1

    if(number < 10){
      Score.infectionRate += 0.02
    } else if (number >= 10 && number < 20) {
      Score.infectionRate += 0.05
    }else if (number >= 20 && number < 30) {
      Score.infectionRate += 0.08
    }else if (number >= 30 && number < 40) {
      Score.infectionRate += 0.11
    }else if (number >= 40 && number < 50) {
      Score.infectionRate += 0.13
    } else {
      Score.infectionRate += 0.13
    }
  }
}
