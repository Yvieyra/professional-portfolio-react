import React from 'react';
//consider adding className if statement for CSS


export default function NavTabs({ handlePageChange }) {
    return (
        <header className="topnav">
            <span className="name"> YESSENIA VIEYRA</span> 
            <nav>
                <a href="#about"
                    onClick={() => handlePageChange('About')} >ABOUT</a>

                <a href="#contact"
                    onClick={() => handlePageChange('Contact')}>CONTACT</a>

                <a href="#portfolio"
                    onClick={() => handlePageChange('Portfolio')}>PORTFOLIO</a>

                <a href="#resume"
                    onClick={() => handlePageChange('Resume')}>RESUME</a>
            </nav>
        </header>
    );
}