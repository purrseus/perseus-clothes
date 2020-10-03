import { createSlice } from '@reduxjs/toolkit';

!localStorage.getItem('bag') && localStorage.setItem('bag', '[]');
const initialState = JSON.parse(localStorage.getItem('bag'));

const bag = createSlice({
	name: 'bag',
	initialState,
	reducers: {
		addToBag: (state, action) => {
			const checkProduct = state.find(
				product => product.id === action.payload.id,
			);
			!checkProduct
				? state.push(action.payload)
				: (state[state.indexOf(checkProduct)].quantity += 1);
			localStorage.setItem('bag', JSON.stringify(state));
		},
	},
});

const { reducer, actions } = bag;
export const { addToBag } = actions;
export default reducer;
