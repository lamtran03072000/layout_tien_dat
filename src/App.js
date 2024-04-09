import './App.css';

import { Button } from 'antd';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CustomerTemplate from './template/CustomerTemplate';
import AboutUs from './page/AboutUs';
import HomePage from './page/home/HomePage';
import DetailProduct from './page/DetailProduct/DetailProduct';
import VeChungToi from './page/VeChungToi/VeChungToi';
import ListProduct from './page/ListProduct/ListProduct';
import HideHeader from './HOC/HideHeader';
import TuyenDung from './page/TuyenDung/TuyenDung';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CustomerTemplate />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/detail" element={<DetailProduct />}></Route>
          <Route
            path="/ve-chung-toi"
            element={
              <HideHeader>
                <VeChungToi />
              </HideHeader>
            }
          ></Route>
          <Route path="/About-us" element={<AboutUs />}></Route>
          <Route
            path="/list-product"
            element={
              <HideHeader>
                <ListProduct />
              </HideHeader>
            }
          ></Route>
          <Route
            path="/tuyen-dung"
            element={
              <HideHeader>
                <TuyenDung />
              </HideHeader>
            }
          ></Route>
        </Route>

        {/* <Route path="/admin" element={<AdminTemplate />}>
          <Route path="aboutvn" element={<AboutVn />}></Route>
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
