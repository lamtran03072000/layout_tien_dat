import './App.css';

import { Button } from 'antd';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CustomerTemplate from './template/CustomerTemplate';
import AboutUs from './page/AboutUs';
import HomePage from './page/home/HomePage';
import DetailProduct from './page/DetailProduct/DetailProduct';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CustomerTemplate />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/detail" element={<DetailProduct />}></Route>
          <Route path="/About-us" element={<AboutUs />}></Route>
        </Route>

        {/* <Route path="/admin" element={<AdminTemplate />}>
          <Route path="aboutvn" element={<AboutVn />}></Route>
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
