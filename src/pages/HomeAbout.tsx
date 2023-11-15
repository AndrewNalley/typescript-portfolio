import React from 'react';
import headshot from '../images/headshot_2023_focus.jpeg';

function HomeAbout() {
    return (
        <section className="container" id="about-me">
            <h4 className="heading-center">About Me</h4>
            <article className="grid">
                <div id="img-div">
                    <img className="headshot" src={headshot} alt='headshot' />
                    <h4 className="heading-center">Andrew Nalley</h4>
                </div>
                <div>
                    <blockquote>I am a Full Stack Web Developer with a certificate from the University of Minnesota
                        Web Development Bootcamp, with previous experience as an Administrator and Opera Singer.<br /><br />
                        As professional with a flair for the aesthetic side of things, I have been
                        drawn to the many facets of development and design. <br /><br />
                        I can't wait to bring my skills and years of professional experience to your
                        project!
                    </blockquote>
                </div>
            </article>
        </section>
    )
}
export default HomeAbout;
