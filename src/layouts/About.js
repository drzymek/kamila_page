import React from 'react';
import '../css/About.css';
import aboutPhoto from '../img/about/about_photo.jpg'

const About = () => {
    return (
        <div className="about scrollToPage">
            <aside className="aboutPhoto">
                <img src={aboutPhoto} alt="" />
            </aside>
            <article>
                <h2>Hello my name is <strong>Kamila</strong></h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid deleniti, ratione accusantium perspiciatis ipsum inventore quaerat facere dolorem exercitationem placeat molestias delectus dolores explicabo voluptatum facilis non consectetur officia repellat!</p>
            </article>
        </div>
    );
}

export default About;
<div>About</div>