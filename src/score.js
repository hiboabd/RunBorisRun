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
    Score.infectionRate += 0.005
  }
}
