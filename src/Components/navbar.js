import { useState } from "react";

export default function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <div className="nav-container">
      <a href="#top">
        <img src="/brand/qweb-text-black.png" className="logo" />
      </a>
      <div className={`link-container ${!isCollapsed && "open"}`}>
        <h1>
          <a href="#about" onClick={() => setIsCollapsed(!isCollapsed)}>
            about us
          </a>
        </h1>
        <h1>
          <a href="/projects" onClick={() => setIsCollapsed(!isCollapsed)}>
            projects
          </a>
        </h1>
        <h1>
          <a href="#contact" onClick={() => setIsCollapsed(!isCollapsed)}>
            contact us
          </a>
        </h1>
      </div>
      <img
        src={isCollapsed ? "/brand/hamburger.png" : "/brand/arrow-up.png"}
        className={isCollapsed ? "hamburger" : "arrow"}
        onClick={() => setIsCollapsed(!isCollapsed)}
      />
    </div>
  );
}
