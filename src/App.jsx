import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Home from './pages/Home';
import Login from './admin/Login';
import Admin from './admin/Admin';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';

function AppContent() {
  const location = useLocation();
  const isInternalRoute = location.pathname.startsWith('/admin') || location.pathname.startsWith('/login');
  const [appLoaded, setAppLoaded] = useState(isInternalRoute);

  useEffect(() => {
    if (isInternalRoute) {
      document.body.classList.add('cursor-admin');
      setAppLoaded(true);
    } else {
      document.body.classList.remove('cursor-admin');
    }
  }, [isInternalRoute]);

  return (
    <>
      {!isInternalRoute && <Preloader onComplete={() => setAppLoaded(true)} />}
      {!isInternalRoute && <CustomCursor />}
      
      <motion.div
        initial={isInternalRoute ? false : { opacity: 0, y: 40 }}
        animate={appLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: isInternalRoute ? 0 : 0.2 }}
        className="min-h-screen flex flex-col w-full overflow-x-hidden"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </motion.div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
