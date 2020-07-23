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
        console.log(data)
        this.setState({
          scoreboard: data,
        })
      })
  }



  render(){
    return(
    <div id="scoreboard">
      <center><h1>ScoreBoard</h1>
  
      </center>
      
    </div>
    )
  }


}

export default ScoreboardDisplay
