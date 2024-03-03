import { teamData } from "./teamData";
import { useState } from "react";
import Front from "./card/Front";
import Back from "./card/Back";

export default function Team({ title }) {
  const [rotationDegrees, setRotationDegrees] = useState({});

  const toggleDescription = (id) => {
    setRotationDegrees((prevDegrees) => ({
      ...prevDegrees,
      [id]: prevDegrees[id] ? 0 : 180,
    }));
  };

  return (
    <section className="flex flex-col mt-[3rem]">
      <h2 className="gradient-text text-center font-bold text-6xl pb-[1rem]">{`< ${title} />`}</h2>
      <div className="flex flex-wrap gap-[4rem] justify-center items-center mt-[2rem] w-[80%] mx-auto">
        {teamData[title].map((item, key) => {
          return (
            <div
              onClick={() => toggleDescription(item.name)}
              className={`w-[355px] p-[1rem] text-white rounded-md cursor-pointer card relative z-10 ${
                item.exec ? "gradient-bg" : "dgradient-bg"
              }`}
              key={key}
              style={{
                transform: `rotateY(${rotationDegrees[item.name] || 0}deg)`,
              }}
            >
              <Front item={item} />
              <Back item={item} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
