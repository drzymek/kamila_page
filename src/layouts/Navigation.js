import React from 'react';
import '../css/Navigation.css';

const menuList = [
    { name: "home", className: "menu-item", id: "#home" },
    { name: "about", className: "menu-item", id: "#about" },
    { name: "gallery", className: "menu-item", id: "#gallery" },
    { name: "contact", className: "menu-item", id: "#contact" }
]

const scrollToPage = () => {
    const pageFromTop = document.querySelector('.navScrollToPage').offsetTop;
    window.scroll({
        top: pageFromTop
    })
}

const Navigation = () => {
    const menu = menuList.map(item => (
        <li key={item.name}>
            <a href={item.id} className={item.className} id={item.id} onClick={scrollToPage} >{item.name}</a>
        </li>
    ))

    return (

        <nav>
            <ul>
                {menu}
            </ul>
        </nav>
    );
}

export default Navigation;
