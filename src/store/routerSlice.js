import { createSlice } from '@reduxjs/toolkit';
import { VN } from '../Constant/language';

const initialState = {
  languageRx: VN,
};

const routerSlice = createSlice({
  name: 'routerSlice',
  initialState,
  reducers: {
    changeLanguageAction(state, action) {
      state.languageRx = action.payload;
    },
  },
});

export const { changeLanguageAction } = routerSlice.actions;

export default routerSlice.reducer;
