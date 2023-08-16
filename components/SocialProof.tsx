import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

type Props = {};

function SocialProof({}: Props) {
  const [developersCount, setDevelopersCount] = useState(0);
  const [contributorsCount, setContributorsCount] = useState(0);
  const [organizationsCount, setOrganizationsCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (developersCount < 73) {
        setDevelopersCount(developersCount + 1);
      }
      if (contributorsCount < 1) {
        setContributorsCount(contributorsCount + 1);
      }
      if (organizationsCount < 60) {
        setOrganizationsCount(organizationsCount + 1);
      }
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, [developersCount, contributorsCount, organizationsCount]);

  return (
    <section className="bg-gray-900 py-8 flex items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold leading-9 tracking-tight text-white sm:leading-10 mb-16">
          We are the world&apos;s leading software development platform. <br />
          Numbers says it all.
        </h2>
        <dl className="grid max-w-screen-md gap-8 mx-auto  sm:grid-cols-3 text-white">
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
              {developersCount}M+
            </dt>
            <dd className="font-light text-gray-400">developers</dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
              {contributorsCount}B+
            </dt>
            <dd className="font-light text-gray-400">contributors</dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
              {organizationsCount}K+
            </dt>
            <dd className="font-light text-gray-400">organizations</dd>
          </div>
        </dl>
      </motion.div>
    </section>
  );
}

export default SocialProof;
