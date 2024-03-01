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
                <center>
                    <p> My name is Yessenia and I am a hardworking individual who has spent the last six years of my professional career
                        in property management. Property management has taught me a long list of skills that I know will be useful and make
                        me an asset to your team. From operations management, marketing, budgets, auditing, accounting, customer service,
                        and problem solving. I have become a great multi-tasker that knows how to organize a number of high priority tasks
                        in a day and communicate effectively with my peers for the most efficient solutions and task completion. I believe
                        my positive attitude and strong work ethic has helped me become a top performer in every organization/company I have
                        been a part of. I am currently looking for an opportunity to change careers and start a career in the tech world. I
                        recently received my full stack development certificate from the University Of Utah. I am ready to apply the skills I
                        have learned and continue to learn more.</p>
                </center>
            </div>

        </div>
    );
}
