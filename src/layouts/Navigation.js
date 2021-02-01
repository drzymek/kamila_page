import React from 'react';
import { useScrollSections } from 'react-scroll-section';
import '../css/Navigation.css';

const Navigation = () => {
    const sections = useScrollSections()

    return (

        <nav>
            <ul>
                {sections.map(({ id, onClick, selected }) => (
                    <li key={id} onClick={onClick} selected={selected}>
                        {id.toUpperCase()}
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navigation;
