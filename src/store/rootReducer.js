import { combineReducers } from '@reduxjs/toolkit';
import routerSlice from './routerSlice';
import animationSlice from './Animation/animationSlice';

export const rootReducer = combineReducers({
  routerSlice: routerSlice,
  animationSlice: animationSlice,
});
