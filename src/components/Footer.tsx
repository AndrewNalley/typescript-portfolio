import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <footer className="grid">
            <nav className="heading-center">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/andrew-nalley/" role="button" className="contrast"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a>
                    </li>
                    <li>
                        <a href="https://github.com/AndrewNalley/" role="button" className="contrast"><FontAwesomeIcon icon={faGithub} /> Github</a>
                    </li>
                    <li>
                        <a href="mailto:awnalley@gmail.com" role="button" className="contrast"><FontAwesomeIcon icon={faEnvelope} /> Email</a>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;