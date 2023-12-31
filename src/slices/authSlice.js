import { createSlice  } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'authstore',
  initialState: {
    user: '',
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    }
  },
});

export const {
  setUser,
} = authSlice.actions;

export default authSlice.reducer;
