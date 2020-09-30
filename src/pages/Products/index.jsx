import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import './Products.scss';
import { ReactComponent as LoadingComponent } from 'assets/icons/loading-component.svg';

import { getCategory } from 'redux/reducers/categorySlice';
import productApi from 'api/productAPI';
import ProductCard from 'common/ProductCard';

const Product = () => {
	const { category } = useParams();

	const dispatch = useDispatch();
	const categoryState = useSelector(state => state.category);
	const filterData = categoryState.filter(
		product => product.category === category,
	);

	const topElement = useRef(null);

	useEffect(() => {
		const fetchCategory = async () => {
			try {
				const categoryData = await productApi.getAll();
				dispatch(getCategory(categoryData));
			} catch (error) {
				throw error;
			}
		};
		fetchCategory();
		topElement.current.scrollIntoView({ behavior: 'smooth' });
	}, [category, dispatch]);

	return (
		<div className="products" ref={topElement}>
			<h1>{category}</h1>
			<div className="list">
				{!!categoryState.length ? (
					filterData.map(product => <ProductCard product={product} />)
				) : (
					<LoadingComponent />
				)}
			</div>
		</div>
	);
};

export default Product;
