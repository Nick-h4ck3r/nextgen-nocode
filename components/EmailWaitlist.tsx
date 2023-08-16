import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";

type Props = {};

function EmailWaitlist({}: Props) {
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");

  function isValidEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email);
  }

  async function joinWaitlist(e: any) {
    e.preventDefault();
    console.log("join waitlist called");

    if (email === "" || !isValidEmail(email)) {
      console.log("email is empty");
      return toast.error("Please enter a valid email.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }

    try {
      console.log("try block");
      await axios.post("https://codedoctor-api.vercel.app/joinwaitlist", {
        email,
      });
      showSuccessToastMessage();
    } catch (error) {
      showWarnToastMessage();
    }
  }

  const showSuccessToastMessage = () => {
    toast.success("You are now in the waitlist.", {
      position: toast.POSITION.TOP_RIGHT,
      toastId: "join-waitlist",
    });
  };

  const showWarnToastMessage = () => {
    toast.warn("You are already in the waitlist.", {
      position: toast.POSITION.TOP_RIGHT,
      toastId: "join-waitlist",
    });
    console.log("function ran");
  };

  return (
    <section className="bg-gray-50 h-screen flex items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeOut", duration: 1.2 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen"
      >
        <h1 className="mb-6 text-center text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight leading-none text-primaryText">
          Join the waitlist to get early access
        </h1>
        <p className="mb-8 text-lg font-normal text-secondaryText sm:px-16 xl:px-48 max-w-7xl text-center">
          We are currently in private beta. Join the waitlist to get early
          access. We will send you an email when we are ready to onboard you.
        </p>
        <div className="w-full bg-white rounded-lg shadow sm:max-w-md py-6 px-2">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Who are you?
                </label>
                <select
                  id="category"
                  name="category"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="company" className="py-2">
                    Company
                  </option>
                  <option value="tester" className="py-2">
                    Tester
                  </option>
                </select>
              </div>

              <button
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:opacity-50"
                onClick={joinWaitlist}
                disabled={email === "" || !isValidEmail(email)}
              >
                Join the waitlist
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default EmailWaitlist;
