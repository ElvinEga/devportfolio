import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo, langIcons } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import Myfeatures from "../components/features";
import Contact from "../components/contact";
import About from "../components/about";
import ProjectsGrid from "../components/projects/ProjectsGrid";

const Home = () => {
  return (
    <>
      <Head>
        <title>Organica - Organic Marketplace</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      {/* <SectionTitle pretitle="About Me"></SectionTitle> */}
      <About data={langIcons} />
      {/* <div id="product"></div> */}
      {/* <Benefits data={benefitOne} /> */}
      <div id="features"></div>
      <Myfeatures data={benefitOne} />
      {/* <div id="services"></div> */}
      {/* <Benefits imgPos="right" data={benefitTwo} /> */}
      <div id="about"></div>
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      {/* <Testimonials /> */}
      <ProjectsGrid />
      {/* <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle> */}
      {/* <Faq /> */}

      <Contact />
      {/* <Cta /> */}
      <Footer />
      {/* <PopupWidget /> */}
    </>
  );
};

export default Home;
