import React, { useEffect } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import SvgLogo from '../Header/SvgLogo';
import { MenuOutlined } from '@ant-design/icons';
import HeaderSpMobile from './HeaderSpMobile';
import { useDispatch, useSelector } from 'react-redux';
import { getContentPageThunk } from '../../store/contentPage/contentPageThunk';
import {
  setActiveHeaderMobileAction,
  setIsOpenHeaderSpMobileAction,
} from '../../store/Animation/animationSlice';
import HeaderMain from './HeaderMain';
import HeaderVeChungToiMobile from './HeaderVeChungToiMobile';
import HeaderSanPhamMobile from './HeaderSanPhamMobile';
import { changeLanguageAction } from '../../store/contentPage/contentPageSlice';

const dataActiveHeader = [
  {
    id: 0,
    children: <HeaderMain />,
  },
  {
    id: 1,
    children: <HeaderVeChungToiMobile />,
  },
  {
    id: 2,
    children: <HeaderSanPhamMobile />,
  },
];
const HeaderMobile = () => {
  const dispatch = useDispatch();
  const { activeHeaderMobile } = useSelector((state) => state.animationSlice);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const language = searchParams.get('language');
    if (language) {
      dispatch(getContentPageThunk(language));
      dispatch(changeLanguageAction(language));
    } else {
      dispatch(getContentPageThunk('vn'));
    }
  }, []);
  const handleOpenHeaderSp = () => {
    dispatch(setIsOpenHeaderSpMobileAction(true));
    dispatch(setActiveHeaderMobileAction(0));
  };
  return (
    <div>
      <div className="absolute w-full py-5 z-10">
        <div className="container_td ">
          <div className="flex justify-between items-start">
            <div>
              <NavLink to={'/'}>
                <SvgLogo w={70} h={78} />
              </NavLink>
            </div>
            <MenuOutlined
              onClick={handleOpenHeaderSp}
              className="text-white text-2xl"
            />
          </div>
        </div>
      </div>
      <HeaderSpMobile>
        {dataActiveHeader[activeHeaderMobile]?.children}
      </HeaderSpMobile>
    </div>
  );
};

export default HeaderMobile;
