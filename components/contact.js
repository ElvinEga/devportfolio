import React from "react";
import Container from "./container";
import SectionTitle from "./sectionTitle";

const Contact = () => {
  return (
    <Container>
      <SectionTitle pretitle="Contact Us" title="Getting in Touch With Us">
        Thank you for visiting our website! We're happy to help answer any
        questions you may have. Please fill out the form below and we'll get
        back to you as soon as possible.
      </SectionTitle>
      <div class="lg:w-1/2 md:w-2/3 mx-auto" id="contact">
        <div class="flex flex-wrap -m-2">
          <div class="p-2 w-1/2">
            <div class="relative">
              <label
                for="name"
                class="leading-7 text-sm text-gray-600 dark:text-gray-200"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 dark:border-gray-600 dark:bg-white focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div class="p-2 w-1/2">
            <div class="relative">
              <label
                for="email"
                class="leading-7 text-sm text-gray-600 dark:text-gray-200"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 dark:border-gray-600 dark:bg-white focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div class="p-2 w-full">
            <div class="relative">
              <label
                for="message"
                class="leading-7 text-sm text-gray-600 dark:text-gray-200"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 dark:border-gray-600 dark:bg-white focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
          </div>
          <div class="p-2 w-full">
            <button class="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
