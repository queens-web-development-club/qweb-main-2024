import { useState } from "react";

export default function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <div className="nav-container z-[99]">
      <a href="/">
        <img src="/brand/qweb-text-white.png" className="logo" />
      </a>
      <div className={`link-container ${!isCollapsed && "open"}`}>
        <h1>
          <a href="/#about" onClick={() => setIsCollapsed(!isCollapsed)}>
            about us
          </a>
        </h1>
        <h1>
          <a href="/projects" onClick={() => setIsCollapsed(!isCollapsed)}>
            projects
          </a>
        </h1>
        <h1>
          <a href="/meet" onClick={() => setIsCollapsed(!isCollapsed)}>
            meet the team
          </a>
        </h1>
        <h1>
          <a href="/sponsorship" onClick={() => setIsCollapsed(!isCollapsed)}>
            sponsorship
          </a>
        </h1>
        <h1>
          <a href="/education" onClick={() => setIsCollapsed(!isCollapsed)}>
          education
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
