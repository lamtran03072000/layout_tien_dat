import React, { useEffect, useState } from 'react';
import { imgUploadService } from '../../service/imgUpload';

const ImgFetch = ({ imgId }) => {
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
  return <img src={imgSrc} alt="" className="w-full h-full object-cover" />;
};

export default ImgFetch;
