import React from 'react';
import '../css/About.css';
import aboutPhoto from '../img/about/about_photo.jpg'

const About = () => {
    return (
        <>
            <aside className="aboutPhoto">
                <img src={aboutPhoto} alt="" />
            </aside>
            <article>
                <h1>Hello my name is <strong>Kamila</strong></h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid deleniti, ratione accusantium perspiciatis ipsum inventore quaerat facere dolorem exercitationem placeat molestias delectus dolores explicabo voluptatum facilis non consectetur officia repellat!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam deleniti rerum pariatur nisi maxime incidunt voluptatibus facilis esse, consequatur nesciunt quia fugit accusantium optio odio hic consequuntur praesentium quaerat laudantium.</p>
            </article>
        </>
    );
}

export default About;
<div>About</div>