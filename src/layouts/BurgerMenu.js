import React, { useState } from 'react';
import '../css/BurgerMenu.css';

const menuList = [
    { name: "home", className: "menu-item", id: "#home" },
    { name: "about", className: "menu-item", id: "#about" },
    { name: "gallery", className: "menu-item", id: "#gallery" },
    { name: "contact", className: "menu-item", id: "#contact" }
]

const menu = menuList.map(item => (
    <li key={item.name}>
        <a href={item.id} className={item.className} id={item.id} >{item.name}</a>
    </li>
))

export default function BurgerMenu() {

    const [isActive, setActive] = useState('false');

    const handleToggleNav = () => {
        setActive(!isActive);
    };
    return (
        <>
            <div className={`arrow ${isActive ? '' : 'on'}`} onClick={handleToggleNav}>
                <i className="fas fa-arrow-circle-down"></i>
            </div>
            <nav className={`mobileNav ${isActive ? '' : 'on'}`}>
                <ul>
                    {menu}
                </ul>
            </nav>
        </>
    );
}