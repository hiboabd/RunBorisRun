
import Score from '../src/score'

describe('Score', () => {

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

})
