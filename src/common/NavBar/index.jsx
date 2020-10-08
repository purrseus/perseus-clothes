import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import './NavBar.scss';
import { ReactComponent as Logo } from 'assets/icons/logo.svg';
import { ReactComponent as Search } from 'assets/icons/search.svg';

import Bag from 'common/NavBar/Bag';

const NavBar = () => {
  const history = useHistory();

  const handleOnKeyUp = event => {
    if (event.keyCode === 13 && event.target.value.trim()) {
      history.push(`/search/${event.target.value}`);
    }
    return;
  };

  return (
    <div className="nav-bar">
      <NavLink className="nav-bar__logo" to="/">
        <Logo className="nav-bar__logo-icon" />
        <h1>Perseus</h1>
      </NavLink>

      <div className="search">
        <Search className="search-icon" />
        <input
          className="search-input"
          type="text"
          placeholder="Search..."
          onKeyUp={event => handleOnKeyUp(event)}
        />
      </div>

      <div className="link-group">
        <NavLink className="link" activeClassName="active" to="/categories">
          Categories
        </NavLink>
        <NavLink className="link" activeClassName="active" to="/products/men">
          Men
        </NavLink>
        <NavLink className="link" activeClassName="active" to="/products/women">
          Women
        </NavLink>
        <div className="link">Contacts</div>
      </div>

      <Bag />
    </div>
  );
};

export default NavBar;
