import React from 'react';
import PropTypes from 'prop-types';

import './ProductCard.scss';
import AddToCartBtn from './AddToCartBtn';

const ProductCard = ({ product }) => {
	return (
		<div className="product-card">
			<div
				className="product-bg"
				style={{ backgroundImage: `url(${product.image})` }}
			>
				<AddToCartBtn product={product} />
			</div>
			<div className="details">
				<div className="product-name">{product.name}</div>
				<span className="price">{`$${product.price}`}</span>
				<span className="id"># {product.id}</span>
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
