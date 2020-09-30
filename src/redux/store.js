import { configureStore } from '@reduxjs/toolkit';

import authReducer from 'redux/reducers/authSlice';
import categoriesReducer from 'redux/reducers/categoriesSlice';
import categoryReducer from 'redux/reducers/categorySlice';

const rootReducer = {
	auth: authReducer,
	categories: categoriesReducer,
	category: categoryReducer,
};

const store = configureStore({
	reducer: rootReducer,
});

export default store;
