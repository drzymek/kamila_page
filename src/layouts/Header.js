import React from 'react';
import Navigation from './Navigation';
import '../css/Header.css';
import logo from '../img/newLogo(3).png';


const Header = () => {
    return (
        <>
            <header className="desktopHeader">
                <div className="logo">
                    <img src={logo} alt="circle of life logo"></img>
                </div>
                {<Navigation />}
            </header>
        </>
    );
}

export default Header;