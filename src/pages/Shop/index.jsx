import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Shop.scss';
import { ReactComponent as LoadingComponent } from 'assets/icons/loading-component.svg';

import productApi from 'api/productAPI';
import { getCategories } from 'redux/reducers/categoriesSlice';
import CollectionPreview from 'components/Shop/CollectionPreview';

const Shop = () => {
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
		<div className="shop">
			{!!categoriesState.length ? (
				categoriesState.map(category => (
					<CollectionPreview category={category} />
				))
			) : (
				<LoadingComponent />
			)}
		</div>
	);
};

export default Shop;
