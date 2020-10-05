import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.scss';
import { ReactComponent as Logo } from 'assets/icons/logo.svg';
import { ReactComponent as Search } from 'assets/icons/search.svg';

import Bag from 'common/NavBar/Bag';

const NavBar = () => {
  return (
    <div className="nav-bar">
      <NavLink className="nav-bar__logo" to="/">
        <Logo className="nav-bar__logo-icon" />
        <h1>Perseus</h1>
      </NavLink>

      <div className="search">
        <Search className="search-icon" />
        <input className="search-input" type="text" placeholder="Search..." />
      </div>

      <div className="link-group">
        <NavLink className="link" activeClassName="active" to="/categories">
          Categories
        </NavLink>
        <NavLink className="link" activeClassName="active" to="/contacts">
          Contacts
        </NavLink>
        <NavLink className="link" activeClassName="active" to="/brands">
          Brands
        </NavLink>
      </div>

      <Bag />

      <NavLink className="signin-signout" to="">
        Sign In
      </NavLink>
    </div>
  );
};

export default NavBar;
