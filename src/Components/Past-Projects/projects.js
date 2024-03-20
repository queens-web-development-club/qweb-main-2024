import { useState, useEffect } from "react";
import PAST_PROJECTS from "./constants";

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const length = PAST_PROJECTS.length;
  const [currentProject, setCurrentProject] = useState(PAST_PROJECTS[0]);

  // Carousel functions
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  useEffect(() => {
    setCurrentProject(
      PAST_PROJECTS.filter((project) => project.id === current)[0]
    );
  }, [current]);

  // Preload images
  useEffect(() => {
    PAST_PROJECTS.forEach((project) => {
      const img = new Image();
      img.src = project.imageUrl;
    });
  }, []);

  return (
    <div className="projects-container">
      <div className="text mt-[3rem] xl:mt-[5rem] ml-[7rem] xl:ml-[15rem] min-[1800px]:ml-[25rem]">
        <h1 className="heading white-text text-base 2xl:text-[40px] font-bold">
          {"<Projects />"}
        </h1>
      </div>

      {/* Using a library to help with carousel. Cannot rename class carousel-container*/}
      <div className="carousel-container">
        <div className="desktop-nav">
          <div className="nav-wrapper left-wrapper">
            <img
              src="/brand/right-nav.png"
              className="left-arrow arrow"
              onClick={prevSlide}
            />
          </div>
          <div className="nav-wrapper right-wrapper">
            <img
              src="/brand/left_nav.png"
              className="right-arrow arrow"
              onClick={nextSlide}
            />
          </div>
        </div>

        <div className="mobile-nav">
          <img
            src="/brand/right-nav.png"
            className="left-arrow arrow"
            onClick={prevSlide}
          />
          <img
            src="/brand/left_nav.png"
            className="right-arrow arrow"
            onClick={nextSlide}
          />
        </div>

        {PAST_PROJECTS.map((project, index) => {
          return (
            <div
              className={`slide ${index === current && "active"}`}
              key={index}
            >
              {index === current && (
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  className="image"
                />
              )}
            </div>
          );
        })}
      </div>
      <div className="text-box">
        <h1 className="white-text">{currentProject.name}</h1>
        <p className="white-text text-sm md:text-[20px] xl:text-[25px] 2xl:text-[30px] leading-6 md:leading-8">
          {currentProject.description}
        </p>
        {currentProject.link !== null && (
          <a
            href={currentProject.link}
            target="_blank"
            rel="noreferrer"
            className="white-text"
          >
            Visit Site!
          </a>
        )}
      </div>
    </div>
  );
}
