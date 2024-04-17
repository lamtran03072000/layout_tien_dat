import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setActiveHeaderAction,
  setIsOnHeaderSpAction,
  setIsOpenHeaderSpAction,
  setIsOpenHeaderSpMobileAction,
} from '../store/Animation/animationSlice';
import { useLocation } from 'react-router-dom';
const HideHeader = ({ children }) => {
  const dispatch = useDispatch();

  const location = useLocation();
  const pathname = location.pathname;
  console.log('pathname: ', pathname);

  useEffect(() => {
    dispatch(setIsOpenHeaderSpAction(false));
    dispatch(setActiveHeaderAction(null));
    dispatch(setIsOnHeaderSpAction(false));
    dispatch(setIsOpenHeaderSpMobileAction(false));
  }, [pathname]);
  return children;
};

export default HideHeader;
