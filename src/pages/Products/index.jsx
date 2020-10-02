import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Products.scss';
import { ReactComponent as LoadingComponent } from 'assets/icons/loading-component.svg';

import productApi from 'api/productAPI';
import { getCategories } from 'redux/reducers/categoriesSlice';
import CollectionPreview from 'components/Products/CollectionPreview';

const Products = () => {
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
		<div className="products">
			{!!categoriesState.length ? (
				categoriesState.map((category, index) => (
					<CollectionPreview key={index} category={category} />
				))
			) : (
				<LoadingComponent className="loading-component" />
			)}
		</div>
	);
};

export default Products;
