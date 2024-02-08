import PAST_PROJECTS from "../Components/Past-Projects/constants";
import React, { useState } from "react";

export default function Projects() {
  const [visibleDescriptionId, setVisibleDescriptionId] = useState(null);
  // Initialize a state object to track rotation for each project by its id
  const [rotationDegrees, setRotationDegrees] = useState({});
  

  const toggleDescription = (id) => {
    setVisibleDescriptionId(visibleDescriptionId === id ? null : id);
    // Update rotation for the clicked project specifically
    setRotationDegrees(prevDegrees => ({
      ...prevDegrees,
      [id]: prevDegrees[id] ? prevDegrees[id] + 180 : 180, // Toggle between 0 and 180 degrees or keep adding 180
    }));
  };

  return (
    <div className="nprojects-container">
      <h1 className="nprojects-heading">{'< Projects />'}</h1>
      <div className="nprojects-p">
        {PAST_PROJECTS.map(project => (
          <div key={project.id}>
            <img src={project.imageUrl} alt={project.name} className="nprojects-img" width={660} height={378}/>
            <div className="white-text nprojects-name">
              <div className="p-box">
                <h2 className="npadding">{project.name}</h2>
                <img
                  className="arrow"
                  src="brand/arrow-up.png"
                  alt=""
                  width={32}
                  height={10}
                  onClick={() => toggleDescription(project.id)}
                  style={{
                    transform: `rotate(${rotationDegrees[project.id] || 0}deg)`,
                    transition: 'transform 0.2s ease'
                  }}
                />
              </div>
              {visibleDescriptionId === project.id && (
                <div className="nproject-description white-text">
                  {project.description}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
