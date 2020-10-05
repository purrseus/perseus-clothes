import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import productApi from 'api/productAPI';
import { getCategories } from 'redux/reducers/categoriesSlice';

import './Category.scss';
import ShopNowButton from '../ShopNowButton';
import { ReactComponent as LoadingComponent } from 'assets/icons/loading-component.svg';

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
      {!!categoriesState.length ? (
        categoriesState.map((category, index) => (
          <div
            key={index}
            className="category"
            style={{
              gridArea: category.name,
              backgroundImage: `url(${category.image})`,
            }}
          >
            <ShopNowButton content={category.name} />
          </div>
        ))
      ) : (
        <LoadingComponent className="loading-component" />
      )}
    </div>
  );
};

export default Category;
