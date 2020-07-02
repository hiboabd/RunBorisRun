
import Score from '../src/score'

describe('Score', () => {

  function calculateDistance(distance){
    Score.distance      = distance
    Score.infectionRate = 0
    Score.infectionRateUp()
  }

  test('it increase the score based on distance travelled', () => {
    Score.scoreUp()
    Score.scoreUp()
    expect(Score.distance).toEqual(1/30)
  })

  test('it increase the infection rate based on contact', () => {
    Score.infectionRateUp()
    Score.infectionRateUp()
    expect(Score.infectionRate).toEqual(0.04)
  })

  test('if distance exceeds 10 meters, infection rate increases to 0.05', () => {
    calculateDistance(10)
    expect(Score.infectionRate).toEqual(0.05)
  })

  test('if distance exceeds 20 meters, infection rate increases to 0.08', () => {
    calculateDistance(20)
    expect(Score.infectionRate).toEqual(0.08)
  })

  test('if distance exceeds 30 meters, infection rate increases to 0.11', () => {
    calculateDistance(30)
    expect(Score.infectionRate).toEqual(0.11)
  })

  test('if distance exceeds 40 meters, infection rate increases to 0.13', () => {
    calculateDistance(40)
    expect(Score.infectionRate).toEqual(0.13)
  })

  test('if distance exceeds 50 meters, infection rate remains at 0.13', () => {
    calculateDistance(60)
    expect(Score.infectionRate).toEqual(0.13)
  })

})
