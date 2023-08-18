import Image from "next/image";
import React from "react";
import Container from "./container";
import SectionTitle from "./sectionTitle";

const Myfeatures = (props) => {
  const { data } = props;
  return (
    <>
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
        <div className="container  mx-auto">
          <SectionTitle
            pretitle="Features"
            title="Transforming Agriculture One Innovation at a Time"
          >
            Explore the cutting-edge technologies and advanced features that
            make our smart farming solution a game-changer for modern
            agriculture
          </SectionTitle>
          <div className="flex flex-wrap -m-4">
            {data.bullets.map((item, index) => (
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 dark:border-gray-600 p-6 rounded-lg">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                    {item.icon}
                  </div>
                  <h2 className="text-lg text-gray-800 dark:text-gray-200 font-medium title-font mb-2">
                    {item.title}
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Myfeatures;
