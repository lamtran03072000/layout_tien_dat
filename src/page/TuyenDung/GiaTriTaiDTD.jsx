import React from 'react';
// import YouTubeVideo from '../../components/VideoYoutube/VideoYoutube';
import { useSelector } from 'react-redux';
import ImgFetch from '../../components/ImgFetch/ImgFetch';
import ReactPlayer from 'react-player';

const GiaTriTaiDTD = () => {
  const { content } = useSelector((state) => state.contentPageSlice);

  return (
    <div>
      <div className=" section container_td" id="giatriDTD">
        <h3 className="text-3xl lg:text-xl color_text_content font-bold text-center mb-12 lg:mb-3">
          {content?.tuyenDung?.giaTri?.title}
        </h3>

        <div className="space-y-12 lg:space-y-7">
          <div className="w-full h-[652px] lg:h-[210px]  bg-gray-300">
            <ReactPlayer
              url={content?.tuyenDung?.giaTri?.idYoutube}
              width="100%"
              height="100%"
              style={{
                background: 'red',
              }}
            />
          </div>
          <div className="w-full lg:overflow-x-scroll">
            <div className="flex space-x-8 lg:w-[120%] lg:space-x-4 justify-between">
              <div className="w-1/3 text-center">
                <div className="w-full  pb-[100%] bg-gray-300 relative">
                  <div className="absolute w-full h-full">
                    {content?.tuyenDung?.giaTri?.listData[0]?.img && (
                      <ImgFetch
                        isPreview={true}
                        imgId={content.tuyenDung.giaTri.listData[0].img}
                      />
                    )}
                  </div>
                </div>

                {content?.tuyenDung?.giaTri?.listData[0]?.title && (
                  <p>{content.tuyenDung.giaTri.listData[0].title}</p>
                )}
              </div>
              <div className="w-1/3 text-center">
                <div className="w-full  pb-[100%] bg-gray-300 relative">
                  <div className="absolute w-full h-full">
                    {content?.tuyenDung?.giaTri?.listData[1]?.img && (
                      <ImgFetch
                        isPreview={true}
                        imgId={content.tuyenDung.giaTri.listData[1].img}
                      />
                    )}
                  </div>
                </div>
                {content?.tuyenDung?.giaTri?.listData[1]?.title && (
                  <p>{content.tuyenDung.giaTri.listData[1].title}</p>
                )}
              </div>
              <div className="w-1/3 text-center">
                <div className="w-full  pb-[100%] bg-gray-300 relative">
                  <div className="absolute w-full h-full">
                    {content?.tuyenDung?.giaTri?.listData[2]?.img && (
                      <ImgFetch
                        isPreview={true}
                        imgId={content.tuyenDung.giaTri.listData[2].img}
                      />
                    )}
                  </div>
                </div>
                {content?.tuyenDung?.giaTri?.listData[2]?.title && (
                  <p>{content.tuyenDung.giaTri.listData[2].title}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiaTriTaiDTD;
