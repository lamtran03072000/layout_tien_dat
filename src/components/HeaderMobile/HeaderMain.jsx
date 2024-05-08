import React from 'react';
import { RightOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getContentPageThunk } from '../../store/contentPage/contentPageThunk';
import { setActiveHeaderMobileAction } from '../../store/Animation/animationSlice';

const HeaderMain = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { content } = useSelector((state) => state.contentPageSlice);
  const navigate = useNavigate();
  const handleSwitchLanguage = (lg) => {
    setSearchParams({ language: lg });
    dispatch(getContentPageThunk(lg));
  };
  const handleActiveHeader = (idActive) => {
    dispatch(setActiveHeaderMobileAction(idActive));
  };
  return (
    <div className="color_text_content container_td space-y-16">
      <div
        onClick={() => {
          // navigate('/');
          window.location.href = '/';
        }}
        className="flex justify-between items-center"
      >
        <p className="font-semibold text-base">
          {content?.headerPage?.titlePage['1']}
        </p>
        <RightOutlined style={{ fontSize: 16 }} className="font-bold" />
      </div>
      <div
        onClick={() => {
          handleActiveHeader(1);
        }}
        className="flex justify-between items-center"
      >
        <p className="font-semibold text-base">
          {content?.headerPage?.titlePage['2']}
        </p>
        <RightOutlined style={{ fontSize: 16 }} className="font-bold" />
      </div>
      <div
        onClick={() => {
          handleActiveHeader(2);
        }}
        className="flex justify-between items-center"
      >
        <p className="font-semibold text-base">
          {content?.headerPage?.titlePage['3']}
        </p>
        <RightOutlined style={{ fontSize: 16 }} className="font-bold" />
      </div>
      <div
        onClick={() => {
          // navigate('/');
          window.location.href = '/lien-he';
        }}
        className="flex justify-between items-center"
      >
        <p className="font-semibold text-base">
          {content?.headerPage?.titlePage['4']}
        </p>
        <RightOutlined style={{ fontSize: 16 }} className="font-bold" />
      </div>
      <div className="flex justify-center items-center">
        <div className="flex space-x-3">
          <div
            onClick={() => {
              handleSwitchLanguage('en');
            }}
          >
            <img className="flag" src="./img/flag_vn.png" alt="" />
          </div>
          <div
            onClick={() => {
              handleSwitchLanguage('vn');
            }}
          >
            <img className="flag" src="./img/flag_en.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
