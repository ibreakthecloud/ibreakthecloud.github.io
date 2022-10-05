import React from "react";
import "./project-card.css";
import GithubLanguages from 'react-github-languages'
function ProjectCard({ project }) {
  return (
    <div className="project-card card">
      <div className="project-info">
        <label className="project-title">{project.title}</label>
        <div className="project-links">
          {project.demo && (
            <a className="project-link" href={project.demo}>
              <div className="link-button">
                <i class="fi-rr-globe"></i>Demo
              </div>
            </a>
            )}
            {project.github&& (
              // <a className="project-link" href={project.github}>
                // <div className="link-button">
                <a className="button" href={project.github}><i class="devicon-github-original colored"></i> GitHub</a>
              // </div>
            // </a>
            )}
        </div>
        {/* <a class="button">This is a button</a> */}
        <p>{project.about}</p>
        <div className="project-tags">
              <GithubLanguages 
                repository={project.github.replace('https://github.com/','')}
                width={800}
              />
        </div>
      </div>
      <img src={project.image} className="project-photo" />
    </div>
  );
}

export default ProjectCard;