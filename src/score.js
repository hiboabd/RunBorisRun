export default class Score {

  constructor(){
    this.distance = 0
    this.infectionRate = 0
  }

 scoreUp(){
   this.distance += 1 / 60
 }

  infectionRateUp(){
    this.infectionRate += 0.005
  }
}
