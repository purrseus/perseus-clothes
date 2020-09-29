import React from 'react';
import './Categories.scss';
import Category from 'components/Categories/Category';

const Categories = () => {
	return (
		<div>
			<h1 className="categories-title">Categories</h1>
			<div className="categories">
				<Category />
			</div>
		</div>
	);
};

export default Categories;
