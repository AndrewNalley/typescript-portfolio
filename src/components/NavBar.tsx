import React from 'react';
import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/typescript-portfolio" role="button" className="secondary" >Home</Link>
                </li>
                <li>
                    <Link to="/typescript-portfolio/projects" role="button" className="secondary" >Projects</Link>
                </li>
                <li>
                    <Link to="/typescript-portfolio/contact" role="button" className="secondary" >Contact</Link>
                </li>
                <li>
                    <Link to="/typescript-portfolio/resume" role="button" className="secondary" >Resume</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
