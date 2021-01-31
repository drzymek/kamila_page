import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Navigation.css';

const menu = [
    { name: 'home', path: '/' },
    { name: 'about', path: 'about' },
    { name: 'gallery', path: 'gallery' },
    { name: 'contact', path: 'contact' },
]

const Navigation = () => {

    const list = menu.map(item => (
        <li key={item.name}>
            <NavLink to={item.path} className={item.className}>{item.name}</NavLink>
        </li>
    ))

    return (

        <nav>
            <ul>
                {list}
            </ul>
        </nav>
    );
}

export default Navigation;
