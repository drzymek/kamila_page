import React from 'react';
import Navigation from './Navigation';
import '../css/Header.css';
import logo from '../img/newLogo.png';


const Header = () => {
    return (
        <>
            <span className="logo">
                <img src={logo} alt="circle of life logo"></img>
            </span>
            {<Navigation />}
        </>
    );
}

export default Header;