import './index.css'

import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './main/Main.jsx';
import Navbar from './base/navbar/Navbar.jsx';

export default function App() {
  return (<>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/order/" element={<div>order</div>}  />
        <Route path="/cart/"  element={<div>cart</div>} />
        <Route path="/tracking/"  element={<div>tracking</div>} />
      </Routes>
    </BrowserRouter>
  </>)
}
