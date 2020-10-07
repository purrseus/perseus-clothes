import React from 'react';
import PropTypes from 'prop-types';

import './ItemInBag.scss';

const ItemInBag = ({ product }) => {
  return (
    <div className="item">
      <div
        className="image"
        style={{ backgroundImage: `url(${product.image})` }}
      ></div>
      <div className="details">
        <div className="name">{product.name}</div>
        <div className="price">${product.price}.99 USD</div>
        <div className="quantity">x{product.quantity}</div>
      </div>
    </div>
  );
};

ItemInBag.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }),
};

export default ItemInBag;
