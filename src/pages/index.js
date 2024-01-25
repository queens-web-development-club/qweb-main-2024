import Head from "next/head";
import Navbar from "@/Components/navbar";
import Hero from "@/Components/hero";
import About from "@/Components/about";
import Footer from "@/Components/footer";
import Process from "@/Components/process";
import TechStack from "@/Components/tech-stack";
import Contact from "@/Components/contact-us";
import Projects from "@/Components/Past-Projects/projects";
import Icons from "@/Components/icons";
import Events from "@/Components/events";

export default function Home() {
  return (
    <>
      <Head>
        <title>Queen's Web Development</title>
        <meta
          name="description"
          content="Web Development Club at Queen's run by students for students! We offer free web development services as well as tutorials on full stack development."
        />
        <meta
          name="viewport"
          content="widths=device-width, initial-scale=1.0"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Events />
      <About />
      <Process />
      <TechStack />
      <Projects />
      <Contact />
      <Icons />
      <Footer />
    </>
  );
}
