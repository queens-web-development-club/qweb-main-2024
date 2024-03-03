import Head from "next/head";
import Navbar from "@/Components/navbar";
import Projects from "@/Components/projects";
import Footer from "@/Components/footer";
import Icons from "@/Components/icons";

export default function Home() {
  return (
    <>
      <Navbar />
      <Projects />
      <Footer />
    </>
  );
}
