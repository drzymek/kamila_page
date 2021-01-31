import React from 'react';
import '../css/Hero.css'

import img1 from '../img/heroPhotos/img01.jpg';
import img2 from '../img/heroPhotos/img02.jpg';
import img3 from '../img/heroPhotos/img03.jpg';
import img4 from '../img/heroPhotos/img04.jpg';
import img5 from '../img/heroPhotos/img05.jpg';
import img6 from '../img/heroPhotos/img06.jpg';

const Hero = () => {

    const heroPhotos = [img1, img2, img3, img4, img5, img6];
    const photoIndex = Math.floor(Math.random() * heroPhotos.length);
    const heroPhoto = () => {
        return (heroPhotos[photoIndex])
    }
    return (
        <div className="hero">
            <img src={heroPhoto()} alt="hero" />
        </div>
    );
}

export default Hero;