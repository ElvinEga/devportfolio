import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import { featureOne, langIcons } from "../components/data";
import Footer from "../components/footer";
import Myfeatures from "../components/features";
import Contact from "../components/contact";
import About from "../components/about";
import ProjectsGrid from "../components/projects/ProjectsGrid";

const Home = () => {
  return (
    <>
      <Head>
        <title>DevPortfolio - Developer Portfolio</title>
        <meta
          name="description"
          content="Web Developer Portfolio page in Tailwindcss"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <About data={langIcons} />
      <div id="features"></div>
      <Myfeatures data={featureOne} />
      <div id="about"></div>
      <SectionTitle pretitle="Portfolio" title="Latest Projects">
        Here are some recent projects I've been working on, including my own
        personal projects.
      </SectionTitle>
      <div id="portfolio"></div>
      <ProjectsGrid />

      <Contact />
      <Footer />
    </>
  );
};

export default Home;
