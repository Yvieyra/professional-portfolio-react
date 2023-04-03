import React from 'react';
import marvelImage from "../../images/marvel.png"
import daycareImage from "../../images/daycare.png"
import insomniaImage from "../../images/insomnia.png"

export default function Portfolio() {
    return (
        
        <div className='project-title'>
            <h2>
                Portfolio Projects
            </h2>
        <div className="portfolio-container">
            <div className='project-container'>
                <a href="https://yvieyra.github.io/project-1/" title="Marvel Superheros Webpage" target="_blank" rel="noopener noreferrer">
                    <img src={marvelImage} alt="" width="300" height="180" />
                </a>
                <br></br>
                <a href="https://github.com/Yvieyra/my-portfolio.git" target="_blank" rel="noopener noreferrer">github URL</a>
            </div>

            <br></br>

            <div className='project-container'>
                <a href="https://gentle-fjord-00735.herokuapp.com/login" title="Doggy Daycare Webpage" target="_blank" rel="noopener noreferrer">
                    <img src={daycareImage} alt="" width="300" height="180" />
                </a>
                <br></br>
                <a href="https://github.com/hannahedwards/dog-daycare.git" target="_blank" rel="noopener noreferrer">github URL</a>
            </div>

            <br></br>

            <div className='project-container'>
                <a href="https://drive.google.com/file/d/1kGCvRyv6zO0QvLqn5kr6rn9A7lawEP4H/view" title="Media-Api-Nosql" target="_blank" rel="noopener noreferrer">
                    <img src={insomniaImage} alt="" width="300" height="180" />
                </a>
                <br></br>
                <a href="https://github.com/Yvieyra/media-api-nosql.git" target="_blank" rel="noopener noreferrer">github URL</a>
            </div>
            </div> 
        </div>
    )
}