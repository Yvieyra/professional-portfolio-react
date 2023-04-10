import React from 'react';
import file from '../../Files/Resume.pdf'

export default function Resume() {
    // Function will execute on click of button
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch(file).then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Resume.pdf';
                alink.click();
            })
        })
    }
    return (
        <div className="container">

            <div className='resume'>
                <h3>Front-End</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                </ul>

                <h3>Back-End</h3>
                <ul>
                    <li>Node JS</li>
                    <li>Express</li>
                    <li>Mysql (mysql workbench)</li>
                    <li>Nosql (mongoDB, graphQl, mongoDB compass)</li>
                    <li>React</li>
                    <li>Insomnia</li>
                    <li>MVC programming</li>
                    <li>MERN</li>

                </ul>

                <button onClick={onButtonClick}>
                    Download Resume
                </button>
            </div>

        </div>
    );
}