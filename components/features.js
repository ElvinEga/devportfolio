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
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 dark:border-gray-600 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-800 dark:text-gray-200 font-medium title-font mb-2">
                  Training and Support
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Our team offers thorough training, webinars, and support for a
                  seamless transition to digital farming.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 dark:border-gray-600 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-800 dark:text-gray-200 font-medium title-font mb-2">
                  Marketing Assistance
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  We help farmers create compelling marketing materials and
                  listings to showcase their products and reach new customers.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 dark:border-gray-600 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-800 dark:text-gray-200 font-medium title-font mb-2">
                  Logistics and Delivery
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  We partner with trusted logistics providers to ensure
                  efficient transportation and delivery of produce from farm to
                  table.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 dark:border-gray-600 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-800 dark:text-gray-200 font-medium title-font mb-2">
                  Quality Control
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Our quality control processes ensure that produce meets the
                  highest standards of freshness, taste, and safety.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 dark:border-gray-600 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-800 dark:text-gray-200 font-medium title-font mb-2">
                  Payment Processing
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  We handle payment processing and transactions securely and
                  efficiently, so farmers get paid quickly .
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 dark:border-gray-600 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-800 dark:text-gray-200 font-medium title-font mb-2">
                  Marketplace Connectivity
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  We Connect farmers directly with clients, eliminating
                  intermediaries and maximizing profit margins for both parties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Myfeatures;
