import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';

function App() {
  const [appLoaded, setAppLoaded] = useState(false);

  return (
    <BrowserRouter>
      <Preloader onComplete={() => setAppLoaded(true)} />
      <CustomCursor />
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={appLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="min-h-screen flex flex-col w-full overflow-x-hidden"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </motion.div>
    </BrowserRouter>
  );
}

export default App;
