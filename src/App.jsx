import React, { useState, useEffect } from "react";
import {
  Main,
  Timeline,
  ProgrammingSkills,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';

function App() {
    const [mode, setMode] = useState('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    };

    // Load chatbot scripts
    useEffect(() => {
        const injectScript = (src) => {
            const script = document.createElement('script');
            script.src = src;
            script.async = true;
            document.body.appendChild(script);
        };

        injectScript("https://cdn.botpress.cloud/webchat/v2.2/inject.js");
        injectScript("https://files.bpcontent.cloud/2025/01/23/18/20250123184912-PXICQGVB.js");

        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
            <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
            <FadeIn transitionDuration={700}>
                <Main />
                <ProgrammingSkills />
                <Timeline />
                <Project />
                <Contact />
            </FadeIn>
            <Footer />
        </div>
    );
}

export default App;
