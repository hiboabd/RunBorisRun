import React from 'react';
import image from '../images/Game-screenshot.png';

console.log(image)

function Home(){
  return(
    <div className="home">
      <center>
      <div class="background-container">
        <p> Boris Johnson is on his way to Sainsbury's to get some milk and nappies, but in order to avoid another #barnardcastle, he has to ensure he remains socially distanced.</p>
        <p>It's your job to navigate Boris safely around the streets of London, keeping 2 meters away from fellow pedestrians. </p>
        <img src={image} alt="Run, Boris Run!"></img>
      </div>
      </center>
    </div>
  )
}

export default Home;
