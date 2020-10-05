import { configureStore } from '@reduxjs/toolkit';

import authReducer from 'redux/reducers/authSlice';
import categoriesReducer from 'redux/reducers/categoriesSlice';
import categoryReducer from 'redux/reducers/categorySlice';
import bagReducer from 'redux/reducers/bagSlice';

const rootReducer = {
  auth: authReducer,
  categories: categoriesReducer,
  category: categoryReducer,
  bag: bagReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
