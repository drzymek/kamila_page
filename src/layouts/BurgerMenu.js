import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import '../css/BurgerMenu.css';

const menuList = [
    { name: "home", className: "menu-item", id: "#home" },
    { name: "about", className: "menu-item", id: "#about" },
    { name: "gallery", className: "menu-item", id: "#gallery" },
    { name: "contact", className: "menu-item", id: "#contact" }
]

const scrollToPage = () => {
    const pageFromTop = document.querySelector('.navScrollToPage').offsetTop;
    window.scroll({
        top: pageFromTop,
        behavior: 'smooth'
    })
}

const menu = menuList.map(item => (
    <li key={item.name}>
        <a href={item.id} className={item.className} id={item.id} onClick={scrollToPage} >{item.name}</a>
    </li>
))

class BurgerMenu extends Component {
    showSettings(e) {
        e.preventDefault();
    }
    render() {
        return (
            <Menu className="burgerMenu" width={'30 %'}>
                {menu}
            </Menu >
        );
    }
}

export default BurgerMenu;