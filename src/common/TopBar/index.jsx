import React from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import { useSelector, useDispatch } from 'react-redux';
import { googleAuth } from 'redux/reducers/authSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './TopBar.scss';

const TopBar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);

  const onSignOut = () => {
    firebase.auth().signOut();
    dispatch(googleAuth({ user: false }));
    localStorage.removeItem('logged');
    toast('Logout successful!', { type: 'success' });
  };

  return (
    <div className="top-bar">
      {!!user && <div className="user-name">{user}</div>}
      <ul>
        <li>
          <Link to="/">Marketplace</Link>
        </li>
        <li>
          <Link to="/">Help & FAQs</Link>
        </li>
        <li>
          {user ? (
            <div onClick={onSignOut}>Sign Out</div>
          ) : (
            <Link to="/sign-in">Sign Up / Sign In</Link>
          )}
        </li>
      </ul>
      <ToastContainer />
    </div>
  );
};

export default TopBar;
