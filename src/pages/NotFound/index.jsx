import React from 'react';
import { Link } from 'react-router-dom';

import './NotFound.scss';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h1 className="text">Oops - Not Found!</h1>
      <Link className="btn" to='/'>Back to Home</Link>
    </div>
  );
};

export default NotFound;