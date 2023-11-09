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
                <Route path='/typescript-portfolio' element={<HomeAbout />} />
                <Route path='/typescript-portfolio/projects' element={<Project />} />
                <Route path='/typescript-portfolio/contact' element={<Contact />} />
                <Route path='/typescript-portfolio/resume' element={<Resume />} />
                <Route path='*' element={<Navigate to='/typescript-portfolio' />} />
            </Routes>
        </div>
    )
}

export default Index;