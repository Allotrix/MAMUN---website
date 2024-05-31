import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Committees from './pages/Committees';
import Checkout from './pages/Checkout';
import Navbar from './components/Navbar';
import MobileNavbar from './components/MobileNavbar';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <MainApp />
    </Router>
  );
};

const MainApp = () => {
  const location = useLocation();
  const checkout = location.pathname.startsWith('/checkout');
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      {!checkout && <Navbar openNav={openNav} setOpenNav={setOpenNav} />}
      {!checkout && <MobileNavbar openNav={openNav} setOpenNav={setOpenNav} />}
      <Routes>
        <Route path="/checkout" element={<Checkout />} />
        <Route path='/' element={<Home />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/committees' element={<Committees />} />
        <Route path='/gallery' element={<Gallery />} />
      </Routes>
      {!checkout && <Footer />}
    </>
  );

}

export default App;
