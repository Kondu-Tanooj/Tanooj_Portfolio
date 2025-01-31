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
        <a href="https://docs.google.com/document/d/1AM8urlf882Hm-FPm1rWp_bKtYERyviET/edit?usp=sharing&ouid=108684371136285123458&rtpof=true&sd=true" target="_blank" rel="noreferrer">
        <img
            src={tanooj}
            alt="Avatar"
          />
          </a>
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
          <a href="https://docs.google.com/document/d/1AM8urlf882Hm-FPm1rWp_bKtYERyviET/edit?usp=sharing&ouid=108684371136285123458&rtpof=true&sd=true" target="_blank" rel="noreferrer"><h1>Kondu Tanooj</h1>
          </a>
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
