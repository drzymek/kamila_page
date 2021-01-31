import React from 'react';
import Navigation from './Navigation';
import '../css/Navigation.css';


const Header = () => {
    return (
        <div>
            <span className="logo">
            </span>
            {<Navigation />}
        </div>
    );
}

export default Header;