import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './ShopNowButton.scss';
import { ReactComponent as RightArrow } from 'assets/icons/right-arrow.svg';

const ShopNowButton = ({ content }) => {
  return (
    <Link className="btn" to={`/products/${content}`}>
      <div className="btn__category-name">
        <span className="name">{content}</span>
        <h3 className="shop-now">
          Shop now
          <RightArrow className="right-arrow" />
        </h3>
      </div>
    </Link>
  );
};

ShopNowButton.propTypes = {
  content: PropTypes.string.isRequired,
};

export default ShopNowButton;
