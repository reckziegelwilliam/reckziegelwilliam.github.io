import React from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import './Navbar.css';

const Navbar: React.FC = () => {
    return (
        <nav>
            <Logo />
            <NavLinks />
        </nav>
    );
}

export default Navbar;
