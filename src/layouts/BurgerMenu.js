import React, { useState } from 'react';
// import { slide as Menu } from 'react-burger-menu';
import '../css/BurgerMenu.css';

const menuList = [
    { name: "home", className: "menu-item", id: "#home" },
    { name: "about", className: "menu-item", id: "#about" },
    { name: "gallery", className: "menu-item", id: "#gallery" },
    { name: "contact", className: "menu-item", id: "#contact" }
]

// const scrollToPage = () => {
//     const pageFromTop = document.querySelector('.navScrollToPage').offsetTop;
//     window.scroll({
//         top: pageFromTop,
//         behavior: 'smooth'
//     })
// }

const menu = menuList.map(item => (
    <li key={item.name}>
        <a href={item.id} className={item.className} id={item.id} >{item.name}</a>
    </li>
))

// class BurgerMenu extends Component {
export default function BurgerMenu() {
    // showSettings(e)
    // e.preventDefault();


    /* show/hide menu, with hooks */
    const [isActive, setActive] = useState('false');

    const handleToggleNav = () => {
        setActive(!isActive);
    };

    // render() {
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
    // }
}