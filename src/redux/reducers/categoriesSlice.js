import { createSlice } from '@reduxjs/toolkit';

const categories = createSlice({
	name: 'categories',
	initialState: [],
	reducers: {
		getCategories: (state, action) => {
			state.length = 0;
			state.push(...action.payload);
		},
	},
});

const { reducer, actions } = categories;
export const { getCategories } = actions;
export default reducer;
