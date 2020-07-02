import React from 'react';


function Header(){
  return(
    <div className="header">
      <center>
      <h1> Run Boris, Run! </h1>
      <div className="link-group">
        <a href="/" className="button" >Home</a>
        <a href="/controls" className="button" >Controls</a>
        <a href="/play" className="button" >Play</a>
        <a href="/about" className="button" >About Us</a>
      </div>
      </center>
      <br/>
    </div>
  )
}

export default Header
