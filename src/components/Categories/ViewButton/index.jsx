import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './ViewButton.scss';

const ViewButton = ({ content }) => {
	return (
		<Link className="btn" to={`/shop/${content}`}>
			<h1 className="category-name">{content}</h1>
		</Link>
	);
};

ViewButton.propTypes = {
	content: PropTypes.string.isRequired,
};

export default ViewButton;
