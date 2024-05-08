import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setActiveHeaderAction,
  setIsOnHeaderSpAction,
  setIsOpenHeaderSpAction,
  setIsOpenHeaderSpMobileAction,
} from '../store/Animation/animationSlice';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
const HideHeader = ({ children }) => {
  const dispatch = useDispatch();

  const location = useLocation();
  console.log('location: ', location);
  const pathname = location.pathname;

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(setIsOpenHeaderSpAction(false));
    dispatch(setActiveHeaderAction(null));
    dispatch(setIsOnHeaderSpAction(false));
    dispatch(setIsOpenHeaderSpMobileAction(false));
    window.scrollTo(0, 0);
    const sectionId = searchParams.get('sectionId');
    if (sectionId) {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        setTimeout(() => {
          sectionElement.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [pathname]);
  return children;
};

export default HideHeader;
