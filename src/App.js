import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Navbar';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
   
      <div>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    
  );
}

export default App;
