import React from 'react';
import { Link } from 'react-router-dom';

import './TopBar.scss';

const TopBar = () => {
  return (
    <div className="top-bar">
      <ul>
        <li>
          <Link to="/">Marketplace</Link>
        </li>
        <li>
          <Link to="/">Help & FAQs</Link>
        </li>
        <li>
          <Link to="/">Register / Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default TopBar;
