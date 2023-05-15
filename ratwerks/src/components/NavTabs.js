import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/ratwerkslogowhite.png'
import '../index.css'

function NavTabs() {
  return (

    <nav className="navbar navbar-expand-lg shadow fixed-top">
      <div className="container">  <div>
          <Link to="/"><img style={{ marginTop:"1pc",marginLeft:"1pc",height:"70px"}} src={logo} alt='logo'></img></Link>
        
        </div>
        
      
        <div className="navbar" id="">
          <ul className="navbar-nav ms-auto">
         
            <li className="nav-item">
            <Link className = "nav-a"to="/contact" style={{textDecoration:"none",fontSize:"20px",color:"white"}}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
}

export default NavTabs;
