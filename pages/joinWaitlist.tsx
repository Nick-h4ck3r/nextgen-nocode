"use client";

import CallToAction from "@/components/CallToAction";
import EmailWaitlist from "@/components/EmailWaitlist";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NewsLetter from "@/components/NewsLetter";
import SocialProof from "@/components/SocialProof";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {};

function joinWaitlist({}: Props) {
  return (
    <>
      <Header />
      <CallToAction />
      <SocialProof />
      <EmailWaitlist />
      <NewsLetter />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default joinWaitlist;
