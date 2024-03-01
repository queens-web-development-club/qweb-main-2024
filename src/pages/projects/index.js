import Head from "next/head";
import Navbar from "@/Components/navbar";
import Projects from "@/Components/projects";
import Footer from "@/Components/footer";
import Icons from "@/Components/icons";

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
      <Projects />
      <Footer />
    </>
  );
}
