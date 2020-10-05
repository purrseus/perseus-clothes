import { createSlice } from '@reduxjs/toolkit';

const category = createSlice({
  name: 'category',
  initialState: [],
  reducers: {
    getCategory: (state, action) => {
      state.length = 0;
      state.push(...action.payload);
    },
  },
});

const { reducer, actions } = category;
export const { getCategory } = actions;
export default reducer;
