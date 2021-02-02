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
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid deleniti, ratione accusantium perspiciatis ipsum inventore quaerat facere dolorem exercitationem placeat molestias delectus dolores explicabo voluptatum facilis non consectetur officia repellat!</p>
                <div className="social">
                    <a href="##"><i class="fab fa-facebook-f"></i></a>
                    <a href="##"><i class="fab fa-pinterest-square"></i></a>
                    <a href="##"><i class="fab fa-instagram-square"></i></a></div>
            </article>
        </>
    );
}

export default About;
<div>About</div>