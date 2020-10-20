import React from 'react';
import './style.css'


const Nav = () => {

return (
  
  <ul className="nav">
    <li><a href="#About" active><i class="fas fa-user-circle" style={{fontSize: 48}}></i><br/> About Me</a></li>
    <li style={{marginLeft: 50}}><a href="https://drive.google.com/file/d/1BPanj7Ujy8ywv0nd8tDA8yvqtW-l9bqM/view?usp=sharing" hover target="_blank" rel="noopener noreferrer"><i class="fas fa-file-pdf" style={{fontSize: 48}}></i><br/> Resume</a></li>
    <li style={{marginLeft: 50}}><a href="#projects" hover><i class="fas fa-laptop-code" style={{fontSize: 48}}></i><br/> My Work</a></li>
  </ul>

)

}

export default Nav;