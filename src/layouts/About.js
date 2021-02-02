import React from 'react';
import '../css/About.css';
import aboutPhoto from '../img/about/about_photo(1).jpg'

const About = () => {
    return (
        <>
            <span className="aboutSpan">a<br />b<br />o<br />u<br />t<br /><br /></span>
            <aside className="aboutPhoto">
                <img src={aboutPhoto} alt="" />
            </aside>
            <article>
                <h1>Hi, my name is <span className="nameAbout">Kamila</span></h1>
                <p>I love photography and I try to tell the stories with my photos..., capture moments that are and will be nice to remember after years. It's simple, I record what is the most beautyfull...</p>
                <div className="social">
                    <a href="https://www.facebook.com/CircleofLifephotostories" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                    <a href="##" target="_blank" rel="noopener noreferrer"><i className="fab fa-pinterest-square"></i></a>
                    <a href="##" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram-square"></i></a></div>
            </article>
        </>
    );
}

export default About;
<div>About</div>