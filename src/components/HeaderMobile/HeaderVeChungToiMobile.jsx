import React from 'react';
import { RightOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getContentPageThunk } from '../../store/contentPage/contentPageThunk';
import { setActiveHeaderMobileAction } from '../../store/Animation/animationSlice';

const HeaderVeChungToiMobile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { content } = useSelector((state) => state.contentPageSlice);

  const handleSwitchLanguage = (lg) => {
    setSearchParams({ language: lg });
    dispatch(getContentPageThunk(lg));
  };
  const handleActiveHeader = (idActive) => {
    dispatch(setActiveHeaderMobileAction(idActive));
  };
  return (
    <div className="color_text_content container_td space-y-16">
      <div className="flex justify-between items-center">
        <p
          onClick={() => {
            navigate('/tuyen-dung');
          }}
          className="font-semibold text-base"
        >
          {content?.headerPage?.titlePage['5']}
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
          {content?.headerPage?.titlePage['6']}
        </p>
        <RightOutlined style={{ fontSize: 16 }} className="font-bold" />
      </div>
      <div
        onClick={() => {
          navigate('/ve-chung-toi');
        }}
        className="flex justify-between items-center"
      >
        <p className="font-semibold text-base">
          {content?.headerPage?.titlePage['2']}
        </p>
        <RightOutlined style={{ fontSize: 16 }} className="font-bold" />
      </div>
    </div>
  );
};

export default HeaderVeChungToiMobile;
