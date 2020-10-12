import { configureStore } from '@reduxjs/toolkit';

import categoriesReducer from 'redux/reducers/categoriesSlice';
import categoryReducer from 'redux/reducers/categorySlice';
import bagReducer from 'redux/reducers/bagSlice';
import authReducer from 'redux/reducers/authSlice';

const rootReducer = {
  categories: categoriesReducer,
  category: categoryReducer,
  bag: bagReducer,
  auth: authReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
