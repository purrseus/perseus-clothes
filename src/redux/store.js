import { configureStore } from '@reduxjs/toolkit';

import authReducer from 'redux/reducers/authSlice';
import categoriesReducer from 'redux/reducers/categoriesSlice';
import categoryReducer from 'redux/reducers/categorySlice';
import cartReducer from 'redux/reducers/cartSlice';

const rootReducer = {
	auth: authReducer,
	categories: categoriesReducer,
	category: categoryReducer,
	cart: cartReducer,
};

const store = configureStore({
	reducer: rootReducer,
});

export default store;
