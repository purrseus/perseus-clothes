import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Home.scss';
import { ReactComponent as LoadingComponent } from 'assets/icons/loading-component.svg';

import productApi from 'api/productAPI';
import { getCategories } from 'redux/reducers/categoriesSlice';

import NewProduct from 'components/Home/NewProduct';
import CollectionPreview from 'components/Home/CollectionPreview';

const Home = () => {
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
    fetchCategories()
  }, [dispatch]);

  return (
    <div className="home">
      {!!categoriesState.length ? (
        <div>
          <NewProduct product={categoriesState[1].products[3]} />
          <CollectionPreview category={categoriesState[0]} />
          <CollectionPreview category={categoriesState[2]} />
        </div>
      ) : (
        <LoadingComponent className="loading-component" />
      )}
    </div>
  );
};

export default Home;
