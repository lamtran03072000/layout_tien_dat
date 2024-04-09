import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpenHeaderSp: false,
  activeHeader: null,
  isOnHeaderSp: false,
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
  },
});

export const {
  setIsOpenHeaderSpAction,
  setActiveHeaderAction,
  setIsOnHeaderSpAction,
} = animationSlice.actions;

export default animationSlice.reducer;
