// src/App.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa';
import profilePic from './images/profile.jpg';
import ghentPic from './images/ghent.jpg';
import vwTrainPic from './images/vwTrain.jpg';
import ramenPic from './images/ramen.jpg';
import shrimpPic from './images/shrimp.jpg';

export default function App() {
    return (
        <div className="container-fluid px-3 px-md-5">
            {/* NAVBAR */}
            <header className="navbar d-flex justify-content-between align-items-center py-3">
                <div className="logo h4 mb-0">[\]</div>

                {/* SOCIAL ICONS */}
                <div className="social-icons d-flex align-items-center">
                    <a
                        href="https://github.com/MiguelIbrahimE"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-link"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/miguel-ibrahim/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-link"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://www.youtube.com/@miguelibrahim2151"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-link"
                    >
                        <FaYoutube />
                    </a>
                    <a
                        href="https://www.instagram.com/miguel_ibrahim/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-link"
                    >
                        <FaInstagram />
                    </a>
                </div>
            </header>

            {/* HERO / ABOUT ME */}
            <section className="hero-section text-center my-4">
                <img src={profilePic} alt="Profile" className="profile-pic img-fluid" />
                <h2 className="mt-4">ABOUT ME</h2>
                <div className="roles">
                    <p>Photographer</p>
                    <p>Cook</p>
                    <p>Musician</p>
                    <p>Software Engineer</p>
                </div>
            </section>

            {/* LIST OF WORK / PHOTOS */}
            <section className="work-section mb-5">
                <div className="row">
                    <div className="col-12 col-md-4 mb-4">
                        <ul className="work-list">
                            <li><span>01</span> Ghent</li>
                            <li><span>02</span> VW Train</li>
                            <li><span>03</span> 10 spices ramen</li>
                            <li><span>04</span> Teriyaki spice shrimp</li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-8">
                        <div className="row images-grid g-3">
                            <div className="col-12 col-sm-6">
                                <div className="image-container">
                                    <img src={ghentPic} alt="Ghent" />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div className="image-container">
                                    <img src={vwTrainPic} alt="VW Train" />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div className="image-container">
                                    <img src={ramenPic} alt="Ramen" />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div className="image-container">
                                    <img src={shrimpPic} alt="Shrimp" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
