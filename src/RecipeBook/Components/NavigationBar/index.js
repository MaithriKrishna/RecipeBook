import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

export const NavigationBar = () => (
  <nav>
    <ul className="navBar">
      <li className="navElement">
        <Link to="/Shortlist">Shortlist</Link>
      </li>
      <li className="navElement">
        <Link to="/login">Login | Sign Up</Link>
      </li>
      <li className="navElement">
        <Link to="/addRecipe">Add Recipe</Link>
      </li>
      <li className="navElement">
        <Link to="/myAccount">My Account</Link>
      </li>
    </ul>
  </nav>
);
