import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    
    <nav >
      <ul>
        <li><NavLink to="/" activeclassname="active" className="nav-link">Home</NavLink></li>
        <li><NavLink to="/blog" activeclassname="active" className="nav-link">Blog</NavLink></li>
        <li><NavLink to="/workout" activeclassname="active" className="nav-link">Workout</NavLink></li>
        <li><NavLink to="/signin" activeclassname="active" className="nav-link">Sign In</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;

//basic navbar component with links to the home, blog, workout and sign in pages used MUI for the styling