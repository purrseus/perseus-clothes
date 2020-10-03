import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { addToBag } from 'redux/reducers/bagSlice';

import './AddToBagBtn.scss';

const AddToBagBtn = ({ product }) => {
	const dispatch = useDispatch();

	return (
		<button
			className="add-to-bag"
			onClick={() => {
				const cloneProduct = { ...product };
				cloneProduct.quantity = 1;
				dispatch(addToBag(cloneProduct));
			}}
		>
			+ Add to bag
		</button>
	);
};

AddToBagBtn.propsTypes = {
	product: PropTypes.shape({
		id: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
	}),
};

export default AddToBagBtn;
