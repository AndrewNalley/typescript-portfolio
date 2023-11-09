import React from 'react';
import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/react-portfolio" role="button" className="contrast" >Home</Link>
                </li>
                <li>
                    <Link to="/react-portfolio/projects" role="button" className="contrast" >Projects</Link>
                </li>
                <li>
                    <Link to="/react-portfolio/contact" role="button" className="contrast" >Contact</Link>
                </li>
                <li>
                    <Link to="/react-portfolio/resume" role="button" className="contrast" >Resume</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
