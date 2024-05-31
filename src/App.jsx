import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Committees from './pages/Committees';
import Checkout from './pages/Checkout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/committees' element={<Committees />} />

      </Routes>
    </Router>
  )
}

export default App;
