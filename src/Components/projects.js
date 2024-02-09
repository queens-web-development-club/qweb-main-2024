import React, { useState } from "react";
import PAST_PROJECTS from "../Components/Past-Projects/constants";

export default function Projects() {
  const [visibleDescriptions, setVisibleDescriptions] = useState([]);
  const [rotationDegrees, setRotationDegrees] = useState({});

  const toggleDescription = (id) => {
    if (visibleDescriptions.includes(id)) {
      setVisibleDescriptions(visibleDescriptions.filter(visibleId => visibleId !== id));
    } else {
      setVisibleDescriptions([...visibleDescriptions, id]);
    }
    setRotationDegrees(prevDegrees => ({
      ...prevDegrees,
      [id]: prevDegrees[id] ? prevDegrees[id] + 180 : 180,
    }));
  };

  return (
    <div className="nprojects-container">
      <h1 className="nprojects-heading">{'< Projects />'}</h1>
      <div className="nprojects-p">
        {PAST_PROJECTS.map(project => (
          <div key={project.id}>
            <img src={project.imageUrl} alt={project.name} className="nprojects-img"/>
            <div className="white-text nprojects-name">
              <div className="p-box">
                <h2 className="npadding">{project.name}</h2>
                <img
                  className="arrow"
                  src="brand/arrow-up.png"
                  alt=""
                  onClick={() => toggleDescription(project.id)}
                  style={{
                    transform: `rotate(${rotationDegrees[project.id] || 0}deg)`,
                    transition: 'transform 0.2s ease'
                  }}
                />
              </div>
              {visibleDescriptions.includes(project.id) && (
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
