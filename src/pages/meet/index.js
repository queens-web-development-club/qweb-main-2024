import Navbar from "@/Components/navbar";
import Image from "next/image";
import Team from "@/Components/team/Team";
import { roles } from "@/Components/team/teamData";

export default function meet() {
  return (
    <>
      <Navbar />
      <main className="pb-[8rem]">
        <h1 className="tHead font-bold text-6xl">{"< Our Team />"}</h1>
        <section className="flex justify-center items-center py-[3rem]">
          <Image
            src={"/team-photos/QWEB_team.svg"}
            width={1100}
            height={700}
            sizes="100vw"
            alt="team photo"
            priority={true}
          />
        </section>
        {roles.map((item, key) => {
          return <Team title={item} key={key} />;
        })}
      </main>
    </>
  );
}
