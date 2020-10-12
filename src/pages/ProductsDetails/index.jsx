import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import './ProductsDetails.scss';
import { ReactComponent as LoadingComponent } from 'assets/icons/loading-component.svg';

import { getCategory } from 'redux/reducers/categorySlice';
import productApi from 'api/productAPI';
import ProductCard from 'common/ProductCard';
import NotFound from 'pages/NotFound';

const ProductsDetails = () => {
  const categories = ['hats', 'jackets', 'sneakers', 'men', 'women'];
  const { category } = useParams();

  const dispatch = useDispatch();
  const categoryState = useSelector(state => state.category);
  const filterData = categoryState.filter(
    product => product.category === category,
  );

  useEffect(() => {
    (async () => {
      try {
        const categoryData = await productApi.getAll();
        dispatch(getCategory(categoryData));
      } catch (error) {
        throw error;
      }
    })();
    window.scrollTo(0, 0);
  }, [category, dispatch]);

  return (
    <>
      {categories.indexOf(category) !== -1 ? (
        <div className="products-details">
          <h1>{category}</h1>
          <div className="list">
            {!!categoryState.length ? (
              filterData.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))
            ) : (
              <LoadingComponent className="loading-component" />
            )}
          </div>
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default ProductsDetails;
