import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import productApi from 'api/productAPI';
import { getCategories } from 'redux/reducers/categoriesSlice';

import './Category.scss';
import ViewButton from '../ViewButton';

const Category = () => {
	const dispatch = useDispatch();
	const categoriesState = useSelector(state => state.categories);

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const categories = await productApi.categories();
				dispatch(getCategories(categories));
			} catch (error) {
				throw error;
			}
		};
		fetchCategories();
	}, [dispatch]);

	return (
		<div className="category-wrap">
			{categoriesState.map((category, index) => (
				<div
					key={index}
					className="category"
					style={{
						gridArea: category.name,
						backgroundImage: `url(${category.image})`,
					}}
				>
					<ViewButton category={category} />
				</div>
			))}
		</div>
	);
};

export default Category;
