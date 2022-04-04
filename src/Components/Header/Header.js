import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    return (
            <nav className='header-aria'>
                <Link className='menu-link' to="/">Home</Link>
                <Link className='menu-link' to="/deshbord">Deshbord</Link>
                <Link className='menu-link' to="/comment">Comment</Link>
                <Link className='menu-link' to="/blog">Blog</Link>
                <Link className='menu-link' to="/about">About</Link>
            
            </nav>
    );
};

export default Header;