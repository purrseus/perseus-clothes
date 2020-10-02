import { createSlice } from '@reduxjs/toolkit';

!localStorage.getItem('cart') && localStorage.setItem('cart', '[]');
const initialState = JSON.parse(localStorage.getItem('cart'));

const cart = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const checkProduct = state.find(
				product => product.id === action.payload.id,
			);
			!checkProduct
				? state.push(action.payload)
				: (state[state.indexOf(checkProduct)].quantity += 1);
			localStorage.setItem('cart', JSON.stringify(state));
		},
	},
});

const { reducer, actions } = cart;
export const { addToCart } = actions;
export default reducer;
