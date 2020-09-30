import React from 'react';
import PropTypes from 'prop-types';

import './ProductCard.scss';

const ProductCard = ({ product }) => {
	return (
		<div className="product-card">
			<div
				className="product-bg"
				style={{ background: `url(${product.image})` }}
			></div>
			<div className="details">
				<div className="product-name">{product.name}</div>
				<div className="price">{`$${product.price}`}</div>
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
