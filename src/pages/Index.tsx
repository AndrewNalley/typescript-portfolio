import React, { useState, useEffect } from 'react';
import { useLocation, Routes, Route, Navigate } from "react-router-dom";

import HomeAbout from './HomeAbout';
import Contact from './Contact';
import Project from './Portfolio';
import Resume from './Resume';

function Index() {
// for page transition effect
    const location = useLocation();
    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransistionStage] = useState("fadeIn");

    useEffect(() => {
        if (location !== displayLocation) setTransistionStage("fadeOut");
    }, [location, displayLocation]);

    return (
        <div
            className={`${transitionStage}`}
            onAnimationEnd={() => {
                if (transitionStage === "fadeOut") {
                    setTransistionStage("fadeIn");
                    setDisplayLocation(location);
                }
            }}
        >
            <Routes location={displayLocation}>
                <Route path='/react-portfolio' element={<HomeAbout />} />
                <Route path='/react-portfolio/projects' element={<Project />} />
                <Route path='/react-portfolio/contact' element={<Contact />} />
                <Route path='/react-portfolio/resume' element={<Resume />} />
                <Route path='*' element={<Navigate to='/react-portfolio' />} />
            </Routes>
        </div>
    )
}

export default Index;