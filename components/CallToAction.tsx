import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

function CallToAction({}: Props) {
  return (
    <section className="bg-white py-8 md:py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut" }}
        viewport={{ once: true }}
        className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6"
      >
        <Image
          width={400}
          height={400}
          className="md:rounded-lg object-cover h-96 md:pt-0 md:h-auto rounded-3xl w-full"
          src="/ctaImage.jpg"
          alt="dashboard image"
        />
        {/* <svg
          viewBox="0 0 366 729"
          role="img"
          className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl"
        >
          <title>App screenshot</title>
          <defs>
            <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
              <rect width="316" height="684" rx="36"></rect>
            </clipPath>
          </defs>
          <path
            fill="#4B5563"
            d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
          ></path>
          <path
            fill="#343E4E"
            d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
          ></path>
          <foreignObject
            width="316"
            height="684"
            transform="translate(24 24)"
            clip-path="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
          >
            <img
              alt=""
              width="860"
              height="1864"
              decoding="async"
              data-nimg="1"
              srcSet="/_next/image?url=%2Fhome%2Fapp-preview.png&amp;w=1080&amp;q=75 1x, /_next/image?url=%2Fhome%2Fapp-preview.png&amp;w=1920&amp;q=75 2x"
              src="/_next/image?url=%2Fhome%2Fapp-preview.png&amp;w=1920&amp;q=75"
            />
          </foreignObject>
        </svg> */}

        <div className="mt-8 md:mt-0">
          <h2 className="mb-4 text-4xl md:text-5xl font-bold tracking-tight leading-none text-primaryText">
            Let's create more tools and ideas that brings us together.
          </h2>
          <p className="mb-6 text-lg font-normal text-secondaryText">
            NextGen is a no-code platform that allows you to create and share
            your ideas with the world. It supercharges your creativity and
            allows you to build anything you can imagine.
          </p>
          <a
            href="#"
            className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            Get started
            <svg
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default CallToAction;
