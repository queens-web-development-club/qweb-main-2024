import CountUp from "react-countup";

export default function About() {
  return (
    <div className="about-container" id="about">
      <div className="text">
        <h1 className="blue-text heading">about us</h1>
        <p className="description">
          Queen's Web Development Club is a student-run organization that
          focuses on all aspects of web development, including design and
          development. Our goal is to equip students with the skills and
          knowledge required to build stunning websites through tutorials and
          practical experience with client projects. <br />
          <br />
          In the fall, we offer an education series that covers a wide range of
          topics from the very basics of web development and design. During
          winter, our members get the opportunity to work on a client project
          under the guidance of experienced team leads and QWeb staff to ensure
          success.
        </p>
      </div>
      <div className="card-container">
        <div className="card blue-text">
          <h2>
            <CountUp
              start={300}
              end={400}
              duration={1}
              delay={0}
              enableScrollSpy={true}
            />
            +
          </h2>
          <p>members</p>
        </div>
        <div className="card blue-text">
          <h2>
            <CountUp
              start={0}
              end={30}
              duration={1}
              delay={0}
              enableScrollSpy={true}
            />
            +
          </h2>
          <p>projects</p>
        </div>
        <div className="card blue-text">
          <h2>
            <CountUp
              start={1}
              end={15}
              duration={1}
              delay={0}
              enableScrollSpy={true}
            />
            +
          </h2>
          <p>tutorials</p>
        </div>
      </div>
    </div>
  );
}
