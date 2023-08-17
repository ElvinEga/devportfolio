import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import Myfeatures from "../components/features";
import Contact from "../components/contact";

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
      <SectionTitle pretitle="Organica Benefits" title=" Why should you use us">
        Welcome to Organica, the smart farming solution that's connecting
        farmers and clients like never before. Our cutting-edge technology
        allows farmers to optimize their crop yields, reduce waste, and increase
        profits, all while providing clients with fresh, sustainable produce.
        Join our community today and be part of the agricultural revolution!
      </SectionTitle>
      <div id="product"></div>
      <Benefits data={benefitOne} />
      <div id="features"></div>
      <Myfeatures data={benefitOne} />
      <div id="services"></div>
      <Benefits imgPos="right" data={benefitTwo} />
      <div id="about"></div>
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      {/* <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle> */}
      {/* <Faq /> */}

      <Contact />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
};

export default Home;
