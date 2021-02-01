import React from 'react';
// import { NavLink } from 'react-router-dom';
import '../css/Navigation.css';

const menu = [
    { name: 'home' },
    { name: 'about' },
    { name: 'gallery' },
    { name: 'contact' },
]

const handleScrollToPage = () => {
    const page = document.querySelector('.scrollToPage');
    const pageFromTop = page.offsetTop;
    window.scroll({
        top: pageFromTop,
        behavior: 'smooth'
    })
}


const Navigation = () => {

    const list = menu.map(item => (
        <li key={item.name}>
            <a href={item.className} onClick={handleScrollToPage}>{item.name}</a>
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
