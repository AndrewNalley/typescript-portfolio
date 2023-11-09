import React from 'react';

import dreamscape from '../images/dreamscape.png';
import employeeTracker from '../images/employee-tracker-photo.png';
import weatherDashboard from '../images/weather-dashboard.png';
import pokemonGame from '../images/pokemon-game.png';
import logoMaker from '../images/logo-maker.png';
import noteTaker from '../images/note-taker.png';
import portfolioPhoto from '../images/portfolio.png';
const proj1Link = "https://whispering-crag-58704-755d34513186.herokuapp.com/";
const proj2Link = "https://github.com/AndrewNalley/employee-tracker";
const proj3Link = "https://andrewnalley.github.io/weather-dashboard/";
const proj4Link = "https://2meng.github.io/Whos-that-pokemon/";
const proj5Link = "https://github.com/AndrewNalley/logo-maker";
const proj6Link = "https://aqueous-springs-29735-51eb1397bb8e.herokuapp.com/";
const proj7Link = "https://github.com/AndrewNalley/typescript-portfolio";


function Portfolio() {
    return (
        <>
            <h4 className='heading-center'>Portfolio</h4>
            <article className='grid'>
                <a id='proj-1' href={proj1Link}>
                    <h5>Dreamscape</h5>
                    <img className='proj-photo' src={dreamscape} alt='dreamscape' />
                    <h3>Create calming and inspirational environments</h3>
                </a>
                <a id='proj-2' href={proj2Link}>
                    <h5>Employee Tracker</h5>
                    <img className='proj-photo' src={employeeTracker} alt='employee-tracker' />
                    <h3>Command-line employee tracking application</h3>
                </a>
                <a id='proj-3' href={proj3Link}>
                    <h5>Weather Dashboard</h5>
                    <img className='proj-photo' src={weatherDashboard} alt='weather-dashboard' />
                    <h3>Five-day weather forecast using two different APIs</h3>
                </a>
            </article>
            <article className='grid'>
                <a id='proj-4' href={proj4Link}>
                    <h5>Who's that Pokémon?!</h5>
                    <img className='proj-photo' src={pokemonGame} alt='pokemon-game' />
                    <h3>Test your pokémon knowledge!</h3>
                </a>
                <a id='proj-5' href={proj5Link}>
                    <h5>Logo Maker</h5>
                    <img className='proj-photo' src={logoMaker} alt='logo-maker' />
                    <h3>Simple logos are so hot right now. Quickly generate an SVG logo!</h3>
                </a>
                <a id='proj-6' href={proj6Link}>
                    <h5>Note Taker</h5>
                    <img className='proj-photo' src={noteTaker} alt='note-taker' />
                    <h3>Use to write and save notes</h3>
                </a>
                <a id='proj-7' href={proj7Link}>
                    <h5>Portfolio Repository</h5>
                    <img className='proj-photo' src={portfolioPhoto} alt='portfolio' />
                    <h3>See the code used for this webpage!</h3>
                </a>
            </article>
        </>
    )
}

export default Portfolio;