import React from 'react';
//consider adding className if statement for CSS


export default function NavTabs({ currentPage, handlePageChange }) {
    return (
        <header className="topnav">

            <a href="#about"
                onClick={() => handlePageChange('About')}>About</a>

            <a href="#contact"
                onClick={() => handlePageChange('Contact')}>Contact</a>

            <a href="#portfolio"
                onClick={() => handlePageChange('Portfolio')}>Portfolio</a>

            <a href="#resume"
                onClick={() => handlePageChange('Resume')}>Resume</a>
        </header>
    );
}