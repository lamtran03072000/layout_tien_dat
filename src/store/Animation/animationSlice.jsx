import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpenHeaderSp: false,
  activeHeader: null,
  isOnHeaderSp: false,
  isOpenHeaderSpMb: false,
  activeHeaderMobile: 0,
};

const animationSlice = createSlice({
  name: 'animationSlice',
  initialState,
  reducers: {
    setIsOpenHeaderSpAction: (state, action) => {
      state.isOpenHeaderSp = action.payload;
    },
    setActiveHeaderAction: (state, action) => {
      state.activeHeader = action.payload;
    },
    setIsOnHeaderSpAction: (state, action) => {
      state.isOnHeaderSp = action.payload;
    },
    setIsOpenHeaderSpMobileAction: (state, action) => {
      state.isOpenHeaderSpMb = action.payload;
    },
    setActiveHeaderMobileAction: (state, action) => {
      state.activeHeaderMobile = action.payload;
    },
  },
});

export const {
  setIsOpenHeaderSpAction,
  setActiveHeaderAction,
  setIsOnHeaderSpAction,
  setIsOpenHeaderSpMobileAction,
  setActiveHeaderMobileAction,
} = animationSlice.actions;

export default animationSlice.reducer;
