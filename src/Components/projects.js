import PAST_PROJECTS from "../Components/Past-Projects/constants"
import React from "react";
import { useState } from "react";

export default function Projects() {

  const [visibleDescriptionId, setVisibleDescriptionId] = useState(null); // Tracks the ID of the project with the visible description

  const toggleDescription = (id) => {
    // Toggle visibility: If the clicked project's description is already visible, hide it, otherwise show it
    setVisibleDescriptionId(visibleDescriptionId === id ? null : id);
  };

  return (
    <div className=" nprojects-container">
        <h1 className="nprojects-heading">{'< Projects />'}</h1>
        <div className="nprojects-p">
          {PAST_PROJECTS.map(project => (
            <div  key={project.id}>
              <img src={project.imageUrl} alt={project.name} className="nprojects-img" width={660} height={378} />
              <div className="white-text nprojects-name">
                <div className="p-box">
                  <h2 className="npadding">{project.name}</h2>
                  <button className="pexpand-arrow" onClick={() => toggleDescription(project.id)}>
                    <img src="brand/arrow-up.png" alt="" width={10} height={10}/>
                  </button>
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
