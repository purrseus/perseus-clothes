import { configureStore } from '@reduxjs/toolkit';

import authReducer from 'redux/reducers/authSlice';
import categoriesReducer from 'redux/reducers/categoriesSlice';

const rootReducer = {
	auth: authReducer,
	categories: categoriesReducer,
};

const store = configureStore({
	reducer: rootReducer,
});

export default store;
