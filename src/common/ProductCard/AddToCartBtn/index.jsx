import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { addToCart } from 'redux/reducers/cartSlice';

import './AddToCartBtn.scss';

const AddToCartBtn = ({ product }) => {
	const dispatch = useDispatch();

	return (
		<button
			className="add-to-cart"
			onClick={() => {
				const cloneProduct = { ...product };
				cloneProduct.quantity = 1;
				dispatch(addToCart(cloneProduct));
			}}
		>
			+ Add to cart
		</button>
	);
};

AddToCartBtn.propsTypes = {
	product: PropTypes.shape({
		id: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
	}),
};

export default AddToCartBtn;
