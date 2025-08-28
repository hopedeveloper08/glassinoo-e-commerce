import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuBar from './components/menu/MenuBar.jsx';
import Main from './components/main/Main.jsx';
import Order from './components/order/Order.jsx';
// import AboutUs from './components/about-us/AboutUs.jsx';

export default function App() {
  return (<>
      <BrowserRouter>
        <MenuBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/order/" element={<Order />} />
          {/* <Route path="/cart/" element={<div>cart</div>} /> */}
          {/* <Route path="/tracking/" element={<div>tracking</div>} /> */}
          {/* <Route path="/about-us/" element={<AboutUs />} /> */}
        </Routes>
      </BrowserRouter>
  </>)
}
