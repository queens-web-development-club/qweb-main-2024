import CountUp from "react-countup";

export default function About() {
  return (
    <div className="about-container" id="about">
      <div className="text">
        <h1 className="white-text heading">{'< About Us />'}</h1>
        <p className="white-text description">
        Queen's Web Development Club is a student run organization that teaches students how to build websites through tutorials, workshops and real practice. For local businesses and clubs.  <br />
          <br />
          QWEB members are sorted into design teams and then given a real world customer to consult with. The customer plays an integral role while iterating through the development process. Experienced members lead development teams of members of varying abilities. We do both design and coding!
        </p>
      </div>
      <div className="card-container">
        <div className="card white-text">
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
        <div className="card white-text">
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
        <div className="card white-text">
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
