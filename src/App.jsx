import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Committees from './pages/Committees';
import Checkout from './pages/Checkout';
import Navbar from './components/Navbar';
import MobileNavbar from './components/MobileNavbar';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Footer from './components/Footer';

const App = () => {

  const [openNav, setOpenNav] = useState(false);

  return (
    <Router>
      <Navbar openNav={openNav} setOpenNav={setOpenNav} />
      <MobileNavbar openNav={openNav} setOpenNav={setOpenNav} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/committees' element={<Committees />} />
        <Route path='/gallery' element={<Gallery />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
