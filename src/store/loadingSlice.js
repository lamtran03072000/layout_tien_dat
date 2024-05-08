import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
};

const loadingSlice = createSlice({
  name: 'loadingSlice',
  initialState,
  reducers: {
    turnOnloadingAction: (state, action) => {
      state.isLoading = true;
    },
    turnOffloadingAction: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const { turnOnloadingAction, turnOffloadingAction } =
  loadingSlice.actions;

export default loadingSlice.reducer;
