import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from 'assets/icons/logo.svg';
import { ReactComponent as Search } from 'assets/icons/searching.svg';
import Cart from 'common/Header/Cart';

import './Header.scss';

const Header = () => {
	return (
		<div className="header">
			<NavLink className="logo" to="/">
				<Logo className="logo__icon" />
				<h1>Perseus</h1>
			</NavLink>

			<div className="search-input">
				<Search className="search" />
				<input type="text" placeholder="Search..." />
			</div>

			<div className="link-group">
				<NavLink className="link" to="/categories">
					Categories
				</NavLink>
				<NavLink className="link" to="/shop">
					Shop
				</NavLink>
				<NavLink className="link" to="/contacts">
					Contacts
				</NavLink>
				<NavLink className="link" to="/about">
					About
				</NavLink>
			</div>

			<Cart />

			<NavLink className="link signin-signout" to="">
				Sign In
			</NavLink>
		</div>
	);
};

export default Header;
