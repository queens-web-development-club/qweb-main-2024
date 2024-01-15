export default function TechStack() {
  const techStack = [
    "/tech/html.png",
    "/tech/css.png",
    "/tech/js.png",
    "/tech/node-js.png",
    "/tech/react-js.png",
  ];
  return (
    <div className="tech-stack-container">
      <div className="text">
        <div className="gradient-bar"></div>
        <h1 className="heading">tech stack</h1>
        <p className="description">
          Want more skills to present on your resume? We cover the following
          &#40;and more!&#41; in our curriculum:
        </p>
      </div>

      <div className="card-container">
        {techStack.map((tech) => (
          <div className="card">
            <img src={tech} alt="Tech stack" />
          </div>
        ))}
      </div>
    </div>
  );
}
