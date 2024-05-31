import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Committees from './pages/Committees';
import Checkout from './pages/Checkout';
import Navbar from './components/Navbar';
import MobileNavbar from './components/MobileNavbar';

const App = () => {

  const [openNav, setOpenNav] = useState(false);

  return (
    <Router>
      <Navbar openNav={openNav} setOpenNav={setOpenNav} />
      <MobileNavbar openNav={openNav} setOpenNav={setOpenNav} />
      <Routes>
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/committees' element={<Committees />} />
      </Routes>
    </Router>
  )
}

export default App;
