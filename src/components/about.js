import React from 'react';

function About(){
  return(
    <div className="about">
    <center>
      <div class="background-container">
        <p> Hi, we are the creators of Run Boris, Run. </p>

        <p> We are six budding software developers who joined Makers Academy in February 2020 and built Run Boris, Run as our final project. </p>

        <p> Click on our names to see our other work. </p>

        <div class="about-images-container">
          <div class="grid-item">
            <a href='https://github.com/collier-jo'><p>Jo Collier</p></a>
          </div>

          <div class="grid-item">
            <a href='https://github.com/hiboabd'><p>Hibo Abdilaahi</p></a>
          </div>

          <div class="grid-item">
            <a href='https://github.com/GarethWoodman'><p>Gareth Woodman</p></a>
          </div>

          <div class="grid-item">
            <a href='https://github.com/edmond-b'><p>Edmond Bullaj</p></a>
          </div>

          <div class="grid-item">
            <a href='https://github.com/LTurns'><p>Lizzie Turney</p></a>
          </div>

          <div class="grid-item">
            <a href='https://github.com/cjm106'><p>Colin Muir</p></a>
          </div>

        </div>

      </div>
    </center>
    </div>
  )
}

export default About
