import React from 'react';
import PropTypes from 'prop-types';

import './ProductCard.scss';
import AddToBagBtn from './AddToBagBtn';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div
        className="product-card__background"
        style={{ backgroundImage: `url(${product.image})` }}
      >
        <AddToBagBtn product={product} />
      </div>
      <div className="details">
        <h4 className="details__name">{product.name}</h4>
        <span className="details__price">{`$${product.price}.99 USD`}</span>
        <span className="details__id"># {product.id}</span>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
};

export default ProductCard;
