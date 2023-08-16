import React from "react";
import TickIcon from "./TickIcon";
import { motion } from "framer-motion";

type Props = {};

function Pricing({}: Props) {
  function liClassNames() {
    return "flex items-center space-x-3";
  }
  return (
    <section className="bg-white py-20" id="pricing">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-primaryText">
            Choose your plan and get started today
          </h2>
          <p className="mb-5 text-secondaryText sm:text-xl ">
            14 days unlimited free trial. No contract or credit card required.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {/* <!-- Pricing Card --> */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1.4 }}
            viewport={{ once: true }}
            className="flex flex-col p-6 mx-auto max-w-lg text-center text-primaryText bg-white rounded-xl border border-gray-100 shadow  xl:p-8"
          >
            <h3 className="mb-4 text-2xl font-semibold">Starter</h3>
            <p className="font-light text-gray-500 sm:text-base ">
              Best option for personal use & for your next project.
            </p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold">$29</span>
              <span className="text-gray-500 ">/month</span>
            </div>
            {/* <!-- List --> */}
            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className={liClassNames()}>
                <TickIcon />
                <span>
                  <span className="font-semibold">10,000</span> visitors
                </span>
              </li>
              <li className={liClassNames()}>
                <TickIcon />
                <span>No setup, or hidden fees</span>
              </li>
              <li className={liClassNames()}>
                <TickIcon />
                <span>
                  Team size: <span className="font-semibold">1 developer</span>
                </span>
              </li>
              <li className={liClassNames()}>
                <TickIcon />
                <span>
                  Premium support:{" "}
                  <span className="font-semibold">6 months</span>
                </span>
              </li>
              <li className={liClassNames()}>
                <TickIcon />
                <span>
                  Free updates: <span className="font-semibold">6 months</span>
                </span>
              </li>
            </ul>
            <a
              href="#pricing"
              className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Get started
            </a>
          </motion.div>
          {/* <!-- Pricing Card --> */}
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 50 }}
            viewport={{ once: true }}
            className="flex flex-col relative p-6 mx-auto max-w-lg text-center overflow-hidden text-white bg-primaryText rounded-xl border border-gray-100 shadow xl:p-8"
          >
            <h3 className="text-sm w-full absolute font-bold bg-primary-600 top-0 left-0 py-4 text-white">
              MOST POPULAR
            </h3>
            <h3 className="mb-4 mt-10 text-2xl font-semibold">Company</h3>
            <p className="font-light text-gray-400 sm:text-base ">
              Relevant for multiple users, extended & premium support.
            </p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold">$99</span>
              <span className="text-gray-400">/month</span>
            </div>
            {/* <!-- List --> */}
            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className={liClassNames()}>
                <TickIcon />
                <span>Individual configuration</span>
              </li>
              <li className={liClassNames()}>
                <TickIcon />
                <span>No setup, or hidden fees</span>
              </li>
              <li className={liClassNames()}>
                <TickIcon />
                <span>
                  Team size:{" "}
                  <span className="font-semibold">10 developers</span>
                </span>
              </li>
              <li className={liClassNames()}>
                <TickIcon />
                <span>
                  Premium support:{" "}
                  <span className="font-semibold">24 months</span>
                </span>
              </li>
              <li className={liClassNames()}>
                <TickIcon />
                <span>
                  Free updates: <span className="font-semibold">24 months</span>
                </span>
              </li>
            </ul>
            <a
              href="#pricing"
              className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-4"
            >
              Get started
            </a>
          </motion.div>
          {/* <!-- Pricing Card --> */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1.4 }}
            viewport={{ once: true }}
            className="flex flex-col p-6 mx-auto max-w-lg text-center text-primaryText bg-white rounded-xl border border-gray-100 shadow xl:p-8  "
          >
            <h3 className="mb-4 text-2xl font-semibold">Enterprise</h3>
            <p className="font-light text-gray-500 sm:text-base ">
              Best for large scale uses and extended redistribution rights.
            </p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold">Custom</span>
            </div>
            {/* <!-- List --> */}
            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className={liClassNames()}>
                <TickIcon />
                <span>Individual configuration</span>
              </li>
              <li className={liClassNames()}>
                <TickIcon />
                <span>No setup, or hidden fees</span>
              </li>
              <li className={liClassNames()}>
                <TickIcon />
                <span>
                  Team size:{" "}
                  <span className="font-semibold">100+ developers</span>
                </span>
              </li>
              <li className={liClassNames()}>
                <TickIcon />
                <span>
                  Premium support:{" "}
                  <span className="font-semibold">36 months</span>
                </span>
              </li>
              <li className={liClassNames()}>
                <TickIcon />
                <span>
                  Free updates: <span className="font-semibold">36 months</span>
                </span>
              </li>
            </ul>
            <a
              href="#pricing"
              className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Contact us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
