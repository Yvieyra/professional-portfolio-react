import React from 'react';
import marvelImage from "../../images/marvel.png"
import daycareImage from "../../images/daycare.png"

export default function Portfolio() {
    return (
        <div className="container">
            <h2>
                Portfolio Projects
            </h2>

            <div className='marvel'>
                <a href="https://yvieyra.github.io/project-1/" title="Marvel Superheros Webpage" target="_blank" rel="noopener noreferrer">
                    <img src={marvelImage} alt="" width="300" height="180" />
                </a>
                <br></br>
                <a href="https://github.com/Yvieyra/my-portfolio.git" target="_blank" rel="noopener noreferrer">github URL</a>
            </div>

            <br></br>

            <div className='daycare'>
                <a href="https://gentle-fjord-00735.herokuapp.com/login" title="Doggy Daycare Webpage" target="_blank" rel="noopener noreferrer">
                    <img src={daycareImage} alt="" width="300" height="180" />
                </a>
                <br></br>
                <a href="https://github.com/hannahedwards/dog-daycare.git" target="_blank" rel="noopener noreferrer">github URL</a>
            </div>

            <br></br>
            
            <div className='daycare'>
                <a href="https://gentle-fjord-00735.herokuapp.com/login" title="Doggy Daycare Webpage" target="_blank" rel="noopener noreferrer">
                    <img src={daycareImage} alt="" width="300" height="180" />
                </a>
                <br></br>
                <a href="https://github.com/hannahedwards/dog-daycare.git" target="_blank" rel="noopener noreferrer">github URL</a>
            </div>


        </div>
    )
}