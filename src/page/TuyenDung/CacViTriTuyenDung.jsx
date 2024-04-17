import React from 'react';
import ShowDes from './ShowDes';
const data = [
  {
    tenViTri: 'Nhân công sản xuất',
    soLuong: 200,
    chiTiet: (
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, non
        porro debitis magnam, velit perspiciatis aperiam nesciunt commodi eius
        quaerat veritatis et provident ut unde dolorem, enim vitae! Cumque sed
        voluptate cupiditate totam voluptas, accusamus mollitia. Eos hic
        necessitatibus magnam cupiditate unde suscipit provident voluptatum
        voluptate ducimus minus nam ratione deserunt, voluptatibus recusandae
        iusto, dolorem veniam sapiente? Fuga est ipsum exercitationem. Non
        molestiae, illo earum ab amet molestias beatae, voluptate, esse ullam
        doloremque deleniti perferendis. Ut, odit. Laboriosam nesciunt
        laudantium assumenda ipsum ratione, accusantium facere quia
        exercitationem accusamus suscipit, perferendis sint enim, iste impedit
        eligendi ab esse maiores temporibus earum.
      </div>
    ),
  },
  {
    tenViTri: 'Giám đốc sản xuất',
    soLuong: 120,
    chiTiet: (
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, non
        porro debitis magnam, velit perspiciatis aperiam nesciunt commodi eius
        quaerat veritatis et provident ut unde dolorem, enim vitae! Cumque sed
        voluptate cupiditate totam voluptas, accusamus mollitia. Eos hic
        necessitatibus magnam cupiditate unde suscipit provident voluptatum
        voluptate ducimus minus nam ratione deserunt, voluptatibus recusandae
        iusto, dolorem veniam sapiente? Fuga est ipsum exercitationem. Non
        molestiae, illo earum ab amet molestias beatae, voluptate, esse ullam
        doloremque deleniti perferendis. Ut, odit. Laboriosam nesciunt
        laudantium assumenda ipsum ratione, accusantium facere quia
        exercitationem accusamus suscipit, perferendis sint enim, iste impedit
        eligendi ab esse maiores temporibus earum.
      </div>
    ),
  },
  {
    tenViTri: 'Nhân công sản xuất',
    soLuong: 200,
    chiTiet: (
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, non
        porro debitis magnam, velit perspiciatis aperiam nesciunt commodi eius
        quaerat veritatis et provident ut unde dolorem, enim vitae! Cumque sed
        voluptate cupiditate totam voluptas, accusamus mollitia. Eos hic
        necessitatibus magnam cupiditate unde suscipit provident voluptatum
        voluptate ducimus minus nam ratione deserunt, voluptatibus recusandae
        iusto, dolorem veniam sapiente? Fuga est ipsum exercitationem. Non
        molestiae, illo earum ab amet molestias beatae, voluptate, esse ullam
        doloremque deleniti perferendis. Ut, odit. Laboriosam nesciunt
        laudantium assumenda ipsum ratione, accusantium facere quia
        exercitationem accusamus suscipit, perferendis sint enim, iste impedit
        eligendi ab esse maiores temporibus earum.
      </div>
    ),
  },
];

const CacViTriTuyenDung = () => {
  const renderViTriTuyenDung = () => {
    return data.map((d, i) => {
      return (
        <div key={i} className="h-[350px] relative grid grid_td">
          <img
            src="./img/vitrituyendung.png"
            alt=""
            className="absolute w-full h-full top-0 left-0 -z-10 object-cover"
          />
          <div className="col-start-8 lg:col-start-3 col-end-13 lg:col-end-5 my-auto space-y-14 container_td">
            <div>
              <p className="text-white text-xl lg:text-base font-medium">
                {d.tenViTri}
              </p>
              <p className="text-white text-xl lg:text-xs font-extralight">
                Số Lượng : {d.soLuong} nhân công
              </p>
            </div>
            <div>
              <ShowDes des={d.chiTiet} />
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className=" section ">
      <h3 className="text-3xl lg:text-xl color_text_content font-bold text-center mb-12 lg:mb-3">
        Các vị trí tuyển dụng
      </h3>
      <div className="space-y-10 ">{renderViTriTuyenDung()}</div>;
    </div>
  );
};

export default CacViTriTuyenDung;
