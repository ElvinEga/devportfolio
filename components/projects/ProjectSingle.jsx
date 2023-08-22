import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const imageStyle = { maxWidth: "100%", height: "auto" };

const ProjectSingle = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
    >
      <div class="flex flex-wrap">
        <div class="p-4 sm:mb-0 mb-6">
          <div class=" h-64 overflow-hidden">
            <Image
              class="object-cover object-center h-full w-full"
              src={props.img}
              className="rounded-md border-none"
              alt="Single Project"
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              width={1200}
              height={600}
            />
          </div>
          <h2 class="text-xl font-semibold title-font text-black dark:text-white">
            {props.title}
          </h2>
          <p class="text-base leading-relaxed mt-2 text-gray-500 dark:text-gray-400">
            {props.desc}
          </p>
          <Link
            href="/projects/[id]"
            as={"/projects/" + props.id}
            aria-label="Single Project"
            passHref
            class="text-indigo-500 inline-flex items-center mt-3"
          >
            Live Preview
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
      {/* <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
          <div>
            <Image
              src={props.img}
              className="rounded-t-xl border-none"
              alt="Single Project"
              layout="responsive"
              width={100}
              height={90}
            />
          </div>
          <div className="text-center px-4 py-6">
            <p className="font-general-medium text-xl md:text-2xl text-ternary-dark dark:text-ternary-light mb-2">
              {props.title}
            </p>
            <span className="text-lg text-ternary-dark dark:text-ternary-light">
              {props.category}
            </span>
          </div>
        </div> */}
    </motion.div>
  );
};

export default ProjectSingle;
