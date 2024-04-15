import { combineReducers } from '@reduxjs/toolkit';
import routerSlice from './routerSlice';
import animationSlice from './Animation/animationSlice';
import contentPageSlice from './contentPage/contentPageSlice';

export const rootReducer = combineReducers({
  routerSlice: routerSlice,
  animationSlice: animationSlice,
  contentPageSlice: contentPageSlice,
});
