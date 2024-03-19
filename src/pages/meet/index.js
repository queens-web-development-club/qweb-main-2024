import Navbar from "@/Components/navbar";
import Team from "@/Components/team/Team";
import { roles } from "@/Components/team/teamData";
import Image from "next/image";

export default function meet() {
  return (
    <>
      <Navbar />
      <main className="pb-[8rem] relative">
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
        <Image
          src={"/meetblob/blob1.svg"}
          width={500}
          height={500}
          className="absolute left-0 top-[3%]"
        />
        <Image
          src={"/meetblob/blob2.svg"}
          width={500}
          height={500}
          className="absolute right-0 top-[25%] z-0"
        />
        <Image
          src={"/meetblob/blob3.svg"}
          width={500}
          height={500}
          className="absolute left-0 top-[47%] z-0"
        />
        <Image
          src={"/meetblob/blob4.svg"}
          width={500}
          height={500}
          className="absolute right-0 top-[70%] z-0"
        />
      </main>
    </>
  );
}
