import { createSlice } from '@reduxjs/toolkit';

const auth = createSlice({
	name: 'auth',
	initialState: null,
	reducers: {
		hasSignIn: (state, action) => {
			state = !!action.payload;
		},
	},
});

const { reducers, actions } = auth;
export const { hasSignIn } = actions;
export default reducers;