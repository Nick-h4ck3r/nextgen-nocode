import Link from "next/link";
import React from "react";

type Props = {};

function Header({}: Props) {
  return (
    <header className="flex z-20 border-b py-4 px-4 md:px-12 bg-white justify-between sticky top-0 w-full items-center">
      <a href="/" className="inline-flex gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-[rgb(132,69,254)]"
        >
          <path
            fillRule="evenodd"
            d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
            clipRule="evenodd"
          />
        </svg>
        <span className="font-semibold md:text-lg">NextGen</span>
      </a>
      <div className="hidden md:flex md:gap-4 lg:gap-10 text-[14px] font-semibold text-primaryText">
        <span className="cursor-pointer">About us</span>
        <span className="cursor-pointer">Product</span>
        <span className="cursor-pointer">Blog</span>
        <span className="cursor-pointer">FAQs</span>
        <span className="cursor-pointer">Contact</span>
      </div>
      <div className="flex gap-4">
        <button className="text-[14px] font-semibold text-primaryText">
          Sign up
        </button>
        <Link
          href={"joinWaitlist"}
          className="rounded-3xl text-[14px] font-semibold text-primary-500 border border-primary-600 px-4 py-2 hover:bg-primary-500 hover:text-white duration-300"
        >
          Join the waitlist
        </Link>
      </div>
    </header>
  );
}

export default Header;
