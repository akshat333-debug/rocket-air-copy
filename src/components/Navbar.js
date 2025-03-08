import React from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="navbar"
    >
      <div className="navbar-container">
        <h1 className="logo">RocketAir</h1>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#flights">Flights</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
