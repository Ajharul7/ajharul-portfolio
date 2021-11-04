import React, { useState } from "react";
import "./Navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import {GrFacebook} from "react-icons/gr";
import {SiGithub,SiLinkedin,SiFacebook} from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";
import {RiDownload2Fill} from "react-icons/ri";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <b><span>M</span>y 
            <span>P</span>ortfolio</b>
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/"><b className="text-color">Home</b></NavLink>
            </li>
            <li>
              <NavLink to="/projects"><b className="text-color">Project</b></NavLink>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/1gMpgNq1kPQNE-f2q6hM-M7dImRF8RYJ0/view?usp=sharing" download>
              <b className="text-color" >Resume </b> <RiDownload2Fill className="download" />
              </a>
            </li>
            {/* <li>
              <NavLink to="/contact"><b className="text-color">contact</b></NavLink>
            </li> */}
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.linkedin.com/in/ajharul-haque-choudhury-77a946156"
                target="_thapa">
                <SiLinkedin className="linkedin" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Ajharul7"
                target="_thapa">
                <SiGithub className="github" />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/ajharul.choudhury"
                target="_thapa">
                <GrFacebook className="facebook" />
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </>
  );
};

export default Navbar;