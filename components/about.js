import Image from "next/image";
import React from "react";
import Container from "./container";
import SectionTitle from "./sectionTitle";

const About = (props) => {
  const { data } = props;
  return (
    <>
      <Container className="flex flex-wrap  lg:gap-10 lg:flex-nowrap ">
        <div className="bg-grey-50" id="about">
          <div className="container flex flex-col items-center pt-16 md:pt-20 lg:flex-row">
            <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
              <h2 className="text-sm font-bold tracking-tight text-green-600 uppercase">
                About Me
              </h2>
              <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                Who am I?
              </h2>
              <h4 className="pt-2 text-xl font-medium text-black dark:text-white sm:text-2xl lg:text-2xl">
                I'm Christy Smith, a Web Designer &amp; Photographer
              </h4>
              <p className="pt-3 font-body leading-relaxed  text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
                <div className="flex items-center justify-center sm:justify-start">
                  <p className="font-body text-lg font-semibold uppercase text-grey-20 dark:text-white">
                    Connect with me
                  </p>
                  <div className="hidden sm:block">
                    <i className="bx bx-chevron-right text-2xl text-primary" />
                  </div>
                </div>
                <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                  <a href="/">
                    <i className="bx bxl-facebook-square text-2xl text-primary hover:text-yellow" />
                  </a>
                  <a href="/" className="pl-4">
                    <i className="bx bxl-twitter text-2xl text-primary hover:text-yellow" />
                  </a>
                  <a href="/" className="pl-4">
                    <i className="bx bxl-dribbble text-2xl text-primary hover:text-yellow" />
                  </a>
                  <a href="/" className="pl-4">
                    <i className="bx bxl-linkedin text-2xl text-primary hover:text-yellow" />
                  </a>
                  <a href="/" className="pl-4">
                    <i className="bx bxl-instagram text-2xl text-primary hover:text-yellow" />
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
              <div>
                <div className="flex items-end justify-between">
                  <h4 className="font-body font-semibold uppercase text-black">
                    HTML &amp; CSS
                  </h4>
                  <h3 className="font-body text-3xl font-bold text-primary">
                    85%
                  </h3>
                </div>
                <div className="mt-2 h-3 w-full rounded-full bg-lila">
                  <div
                    className="h-3 rounded-full bg-primary"
                    style={{ width: "85%" }}
                  />
                </div>
              </div>
              <div className="pt-6">
                <div className="flex items-end justify-between">
                  <h4 className="font-body font-semibold uppercase text-black">
                    Python
                  </h4>
                  <h3 className="font-body text-3xl font-bold text-primary">
                    70%
                  </h3>
                </div>
                <div className="mt-2 h-3 w-full rounded-full bg-lila">
                  <div
                    className="h-3 rounded-full bg-primary"
                    style={{ width: "70%" }}
                  />
                </div>
              </div>
              <div className="pt-6">
                <div className="flex items-end justify-between">
                  <h4 className="font-body font-semibold uppercase text-black">
                    Javascript
                  </h4>
                  <h3 className="font-body text-3xl font-bold text-primary">
                    98%
                  </h3>
                </div>
                <div className="mt-2 h-3 w-full rounded-full bg-lila">
                  <div
                    className="h-3 rounded-full bg-primary"
                    style={{ width: "98%" }}
                  />
                </div>
              </div>
              <div className="pt-6">
                <div className="flex items-end justify-between">
                  <h4 className="font-body font-semibold uppercase text-black">
                    Figma
                  </h4>
                  <h3 className="font-body text-3xl font-bold text-primary">
                    91%
                  </h3>
                </div>
                <div className="mt-2 h-3 w-full rounded-full bg-lila">
                  <div
                    className="h-3 rounded-full bg-primary"
                    style={{ width: "91%" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20">
            <div className="flex justify-center relative pb-1">
              <span className="absolute block h-px bg-white bottom-1/2 left-0 right-0 bg-logo-clouds-line" />
              <div className="bg-white px-6 py-3 relative">
                <p className="text-body-sm font-semibold tracking-2 text-neutral-500">
                  CRAFTED DESIGNS FOR
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6">
              {data.icons.map((item, index) => (
                <div className="p-4  transition duration-200 hover:grayscale">
                  <img
                    src={item.url}
                    className="h-12 w-auto mx-auto"
                    loading="lazy"
                    alt={item.title}
                    width=""
                    height=""
                  />
                </div>
              ))}
            </div>

            <div className="flex justify-center relative pb-1">
              <span className="absolute block h-px bg-white bottom-1/2 left-0 right-0 bg-logo-clouds-line" />
              <div className="bg-white px-6 py-3 relative"></div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default About;
