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
                <p>Recent bootcamp full-stack development graduate! I am ready and eager to land my first developer job and make a difference.

                    I am passionate about learning new ideas, skills, and technology . I work well with others in a team setting. I have strong communication skills. Equally work well on my own and have become quite the multi-tasker, and manage my time well.
                    I have spent most of my professional career in property management as an assistant property manager. The industry has taught me how to prioritize between demanding tasks,
                    problem solve on the spot, budget, day to day business operations, marketing, effective communication and most importantly, how important it is to have a good user interface from using marketing sites to property management software.. </p>
            </div>

        </div>
    );
}
