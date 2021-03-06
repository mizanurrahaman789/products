import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
      return (
            <div className='header'>
                  <nav className='nav-bar'>
                        <Link to="/home">Home</Link>
                        <Link to="/Review">Review</Link>
                        <Link to="Dashboard">Dashboard</Link>
                        <Link to="/Blogs">Blogs</Link>
                        <Link to="/About">About</Link>
                  </nav>
            </div>
      );
};

export default Header;