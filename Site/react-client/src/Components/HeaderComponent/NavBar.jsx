import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProfilePage from '../ProfilePage';

class NavBar extends Component {
  render() {
    return (
      <header>
        <ul id="headerButtons">
          <li className="navButton"><Link to="/AboutMe">About Me</Link></li>
          <li className="navButton"><Link to="">Work</Link></li>
          <li className="navButton"><Link to="">Home</Link></li>
        </ul>
      </header>
    )
  }
}
export default NavBar;