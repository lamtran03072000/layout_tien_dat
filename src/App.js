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
import LienHe from './page/LienHe/LienHe';
import LoadingPage from './components/Loading/LoadingPage';

function App() {
  return (
    <BrowserRouter scrollRestoration="auto">
      <LoadingPage />
      <Routes>
        <Route path="/" element={<CustomerTemplate />}>
          <Route
            index
            element={
              <HideHeader>
                <HomePage />
              </HideHeader>
            }
          ></Route>
          <Route
            path="/detail"
            element={
              <HideHeader>
                <DetailProduct />
              </HideHeader>
            }
          ></Route>
          <Route
            path="/ve-chung-toi"
            element={
              <HideHeader>
                <VeChungToi />
              </HideHeader>
            }
          ></Route>
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
          <Route
            path="/lien-he"
            element={
              <HideHeader>
                <LienHe />
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
