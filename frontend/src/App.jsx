import './index.css'

import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './main/Main.jsx';
import Navbar from './base/navbar/Navbar.jsx';

function App() {
  return (<>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  </>)
}

export default App
