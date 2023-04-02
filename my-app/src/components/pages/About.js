import React from 'react';
import aboutImage from "../../images/new yessenia.png"

export default function About() {
    return (
        <div className="container">
            <h2>
                About Me
            </h2>
            <img src={aboutImage} alt="" width="150" height="180" />
            <div className='about-me'>
                <p>I am currently a student at the University of Utah, and I am learning fullstack development. I appreciate the problem solving skills I have learned to develop apps,
                    programs, and just about anything I want with dedication and continuous learning.

                    I am a passionate about learning new skills, and technology. I am someone who works well with others in a team setting.
                    I have strong communication/emotional intelligence skills. Equally, I work well on my own and have become quite the multi-tasker, I manage my time well.</p>
            </div>

        </div>
    );
}
