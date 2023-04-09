import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import githubImage from "../images/github logo.png";
import linkedImage from "../images/linked.png"

export default function ActiveContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <div>
                <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
                {renderPage()}
            </div>

            <footer>
            <a href="https://github.com/Yvieyra" title="Github Profile" target="_blank" rel="noopener noreferrer">
                <img src={githubImage} alt="" width="40" height="40" />
            </a>    

            <a href="https://www.linkedin.com/in/yessenia-vieyra-448333267/" title="Linkedin Profile" target="_blank" rel="noopener noreferrer">
                <img src={linkedImage} alt="" width="40" height="40" />
            </a>      
            </footer>
        </div>
    );
}
