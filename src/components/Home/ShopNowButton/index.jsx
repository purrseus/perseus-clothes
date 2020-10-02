import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './ShopNowButton.scss';

const ShopNowButton = ({ content }) => {
	return (
		<Link className="btn" to={`/products/${content}`}>
			<div className="category-name">
				<h1 className="name">{content}</h1>
				Shop now
			</div>
		</Link>
	);
};

ShopNowButton.propTypes = {
	content: PropTypes.string.isRequired,
};

export default ShopNowButton;
