import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import tanooj from '../assets/images/3.jpg'
import '../assets/styles/Main.scss';

function Main() {
  return (
    <div className="container" id="home">
      <div className="about-section">
        <div className="image-wrapper">
          <img
            src={tanooj}
            alt="Avatar"
          />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/kondu-tanooj" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/kondu-tanooj-21b12124b/" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </div>
          <h1>Kondu Tanooj</h1>
          <p>Software Developer | Prompt Engineer | Freelancer</p>
          <div className="mobile_social_icons">
            <a href="https://github.com/kondu-tanooj" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/kondu-tanooj-21b12124b/" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
