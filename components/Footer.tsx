import React from "react";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="my-8 bg-white">
      <div className="mx-auto max-w-screen-xl text-center border-t pt-8">
        <p className="my-6 text-gray-500 font-medium text-sm px-2 md:px-4 md:text-base">
          This website was designed and developed by{" "}
          <a
            href="https://nikhilkadam.vercel.app/"
            className="text-primaryText font-semibold inline-flex hover:underline"
          >
            Nikhil
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 rotate-180 mt-[1px] text-primaryText"
            >
              <path
                fillRule="evenodd"
                d="M14.78 5.22a.75.75 0 00-1.06 0L6.5 12.44V6.75a.75.75 0 00-1.5 0v7.5c0 .414.336.75.75.75h7.5a.75.75 0 000-1.5H7.56l7.22-7.22a.75.75 0 000-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </a>{" "}
          using NextJs, TypeScript, TailwindCSS and Framer Motion.
        </p>
        <ul className="flex flex-wrap text-sm md:text-base justify-center items-center mb-6 text-gray-900">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About us
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Product
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Blog
            </a>
          </li>
          <li>
            <a href="#FAQPage"
             className="mr-4 hover:underline md:mr-6">
              FAQs
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Contact
            </a>
          </li>
        </ul>
        <span className="text-xs md:text-sm text-gray-500 sm:text-center">
          © 2023{" "}
          <a href="#" className="hover:underline">
            NextGen™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
