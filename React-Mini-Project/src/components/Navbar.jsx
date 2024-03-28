import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    
    <nav >
      <ul>
        <li><NavLink  exact to="/" activeClassName="active" className="nav-link">Home</NavLink></li>
        <li><NavLink to="/blog" activeClassName="active" className="nav-link">Blog</NavLink></li>
        <li><NavLink to="/workout" activeClassName="active" className="nav-link">Workout</NavLink></li>
        <li><NavLink to="/signin" activeClassName="active" className="nav-link">Sign In</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;