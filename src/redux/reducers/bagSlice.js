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

    removeProduct: (state, action) => {
      const checkProduct = state.find(
        product => product.id === action.payload.id,
      );

      action.payload.quantity > 1
        ? (state[state.indexOf(checkProduct)].quantity -= 1)
        : state.splice(state.indexOf(checkProduct), 1);
      localStorage.setItem('bag', JSON.stringify(state));
    },
    cleanBag: state => {
      state.length = 0;
      localStorage.removeItem('bag');
    },
  },
});

const { reducer, actions } = bag;
export const { addToBag, removeProduct, cleanBag } = actions;
export default reducer;
