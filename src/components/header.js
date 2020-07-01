import React from 'react';


function Header(){
  return(
    <div className="header">
      <center>
      <h1> Run Boris, Run! </h1>
      <div className="link-group">
        <a href="/" className="button" >Home</a>
        <a href="/rules" className="button" >Rules</a>
        <a href="/play" className="button" >Play</a>
        <a href="/about" className="button" >About us!</a>
      </div>
      </center>
      <br/>
    </div>
  )
}

export default Header
