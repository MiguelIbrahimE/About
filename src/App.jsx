import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa';
import profilePic from './images/profile.jpg';
import ghentPic from './images/ghent.jpg';
import vwTrainPic from './images/vwTrain.jpg';
import ramenPic from './images/ramen.jpg';
import shrimpPic from './images/shrimp.jpg';
import GitHubCalendar from 'react-github-calendar';
import echo from "./images/icon.png"
// Bootstrap CSS & JS (for modal functionality)
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import data from "./images/data_engineering.png"
export default function App() {
  // State for Modal
  const [selectedProject, setSelectedProject] = useState(null);

  // Dummy projects data
  const projects = [
    {
      title: 'Software Documentation Project: Echo',
      image: echo,
      description: 'Description of Project One goes here.',
    },
    {
      title: 'Internship: Kapernikov',
      image: data,
      description: 'Description of Project Two goes here.',
    },

  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    // Show modal via Bootstrap
    const modal = new window.bootstrap.Modal(document.getElementById('projectModal'));
    modal.show();
  };

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
              <li>
                <span>01</span> Ghent
              </li>
              <li>
                <span>02</span> VW Train
              </li>
              <li>
                <span>03</span> 10 spices ramen
              </li>
              <li>
                <span>04</span> Teriyaki spice shrimp
              </li>
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

      {/* DIVIDER */}
      <hr className="divider" />

      {/* GITHUB CONTRIBUTION HISTORY */}
      <section className="github-section my-5 text-center">
        <h2 className="mb-4">GitHub Commit History</h2>
        <GitHubCalendar username="MiguelIbrahimE" />
      </section>

      {/* FAVORITE PROJECTS SECTION (NEW) */}
      <section className="favorite-projects my-5">
        <h2 className="text-center mb-4">My Favorite Projects</h2>
        <div className="row g-3">
          {projects.map((project, index) => (
            <div
              className="col-6 col-lg-3"
              key={index}
              style={{ cursor: 'pointer' }}
              onClick={() => handleProjectClick(project)}
            >
              <div className="card h-100 bg-dark text-white border-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-img-top img-fluid"
                  style={{ borderRadius: '4px' }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{project.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL FOR PROJECT DETAILS */}
      <div
        className="modal fade"
        id="projectModal"
        tabIndex="-1"
        aria-labelledby="projectModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-dark text-white">
            <div className="modal-header border-0">
              <h5 className="modal-title" id="projectModalLabel">
                {selectedProject?.title}
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center">
              {selectedProject && (
                <>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="img-fluid mb-3"
                    style={{ borderRadius: '4px' }}
                  />
                  <p>{selectedProject.description}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
