import React from 'react';
import { Link } from 'react-router-dom';

import './ViewButton.scss';

const ViewButton = ({ category }) => {
	return (
		<Link className="btn" to={`/shop/${category.name}`}>
			<h1 className="category-name">{category.name}</h1>
		</Link>
	);
};

export default ViewButton;
