import React from 'react';

class ScoreboardDisplay extends React.Component {
  constructor() {
    super();
    this.state = {
      scoreboard: ""
    }
  };

  componentDidMount(){
    this.fetchData('http://localhost:3000/')
  }

  fetchData = (apiToFetch) => {
    fetch(apiToFetch)
      .then(response => response.json())
      .then((data) => {
        this.setState({
          scoreboard: data,
        })
      })
  }

  display = () => {
    var array = []
    for(var i = 0; i < this.state.scoreboard.length; i++){
      var singleScoreObject = this.state.scoreboard[i]
      var score = singleScoreObject.name + " " + singleScoreObject.score
      array.push(score)
    }
    return array
  }



  render(){
    return(
    <div id="scoreboard">
      <center><h1>ScoreBoard</h1>
      {this.display().map((score, index) => {
        return (
         
          <p>{index + 1}. {score} {console.log(score)}</p>
        )
      })
      }
      
      
      
      </center>
      
    </div>
    )
  }


}

export default ScoreboardDisplay

