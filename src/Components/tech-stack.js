export default function TechStack() {
  const techStack = [
    {
      img: "/tech/html.svg",
      text: "HTML",
    },
    { img: "/tech/css.svg", text: "CSS" },
    { img: "/tech/js.svg", text: "JS" },
    { img: "/tech/node-js.svg", text: "Node.js" },
    { img: "/tech/react-js.svg", text: "React" },
  ];
  return (
    <main className="tech-stack-container relative overflow-hidden">
      <div className="text flex flex-col justify-center items-center gap-[2rem]">
        <h1 className="gradient-text font-bold text-4xl md:text-5xl">
          {"<Tech Stack />"}
        </h1>
        <p className="text-white font-normal text-lg md:text-[1.7rem] w-full md:max-w-[60%] text-center">
          Want more skills to present on your resume? We got these &#40;and
          more!&#41; covered in our curriculum:
        </p>
      </div>

      <div className="card-container">
        {techStack.map((tech) => (
          <div className="card ">
            <img src={tech.img} alt="Tech stack" />
            <p className="text-white font-bold text-2xl md:text-4xl">
              {tech.text}
            </p>
          </div>
        ))}
      </div>
      <img
        src="/tech/left-blob.svg"
        className="absolute bottom-[-4rem] md:bottom-[-8rem] left-0 w-[30%] md:w-[20%]"
      />
      <img
        src="/tech/right-blob.svg"
        className="absolute bottom-[-4rem] md:bottom-[-8rem] right-0 w-[30%] md:w-[20%]"
      />
    </main>
  );
}
