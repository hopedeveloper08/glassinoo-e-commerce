import './index.css'

import axios from 'axios'
axios.defaults.baseURL = 'http://192.168.1.6:8000/api/';
// axios.defaults.baseURL = 'http://10.184.5.195:8000/api/';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './main/Main.jsx';
import Navbar from './menu/Menu.jsx';
import Order from './order/Order.jsx';
import AboutUs from './about-us/AboutUs.jsx';

export default function App() {
  return (<>
    <div className="w-full">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/order/" element={<Order />} />
          <Route path="/cart/" element={<div>cart</div>} />
          <Route path="/tracking/" element={<div>tracking</div>} />
          <Route path="/about-us/" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </div>

  </>)
}
