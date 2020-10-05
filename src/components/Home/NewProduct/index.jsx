import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './NewProduct.scss';
import { ReactComponent as Arrow } from 'assets/icons/right-arrow.svg';

const NewProduct = ({ product }) => {
  return (
    <div className="new-product">
      <div className="new-product__content">
        <div className="wrap">
          <h2 className="name">{product.name}</h2>
          <p className="property">Comfortable. Wearable. Available now!</p>
          <Link to={`/products/jackets`} className="main-btn">
            Shop now!
            <Arrow className="arrow" />
          </Link>
        </div>
      </div>

      <div className="new-product__background"></div>
    </div>
  );
};

NewProduct.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
};

export default NewProduct;
