"use client"; // this is a client component
import React, { useState } from "react";
import { Link } from "react-scroll";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useTheme } from "next-themes";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "홈",
    page: "home",
  },
  {
    label: "소개",
    page: "about",
  },
  {
    label: "연락하기",
    page: "contact",
  },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [navbar, setNavbar] = useState(false);

  return (
    <header className="w-full fixed top-0 z-50 bg-white dark:bg-black shadow">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-3xl font-bold">도도북스</span>
        </div>
        <div className="md:hidden">
          <button
            className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
          </button>
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {NAV_ITEMS.map((item, idx) => (
            <Link
              key={idx}
              to={item.page}
              className="mr-5 hover:text-gray-900"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => setNavbar(!navbar)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-gray-300"></div> {/* 헤더 아래에 한 줄 추가 */}
    </header>
  );
}
