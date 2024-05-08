import { combineReducers } from '@reduxjs/toolkit';
import animationSlice from './Animation/animationSlice';
import contentPageSlice from './contentPage/contentPageSlice';
import loadingSlice from './loadingSlice';

export const rootReducer = combineReducers({
  animationSlice: animationSlice,
  contentPageSlice: contentPageSlice,
  loadingSlice,
});
