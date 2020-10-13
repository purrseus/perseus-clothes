import { createSlice } from '@reduxjs/toolkit';

const auth = createSlice({
  name: 'auth',
  initialState: {},
  reducers: {
    googleAuth: (state, action) => {
      const { user } = action.payload;
      state.user = user;
    },
  },
});

const { reducer, actions } = auth;
export const { googleAuth } = actions;
export default reducer;
