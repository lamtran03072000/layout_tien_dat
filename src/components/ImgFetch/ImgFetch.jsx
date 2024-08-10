import React, { useEffect, useState } from 'react';
import { imgUploadService } from '../../service/imgUpload';
import { Image } from 'antd';

const ImgFetch = ({ imgId, isPreview = false }) => {
  const [imgSrc, setImgSrc] = useState(null);
  useEffect(() => {
    const fetchImg = async () => {
      try {
        let data = await imgUploadService.getImg(imgId);
        setImgSrc(data.data.img);
      } catch (error) {
        // Bạn có thể thiết lập một ảnh mặc định khi có lỗi
        setImgSrc('');
      }
    };

    fetchImg();
  }, [imgId]);
  return (
    <Image
      preview={isPreview}
      src={imgSrc}
      alt=""
      width={'100%'}
      height={'100%'}
      loading="lazy"
      style={{
        objectFit: 'cover',
      }}
    />
  );
};

export default ImgFetch;
