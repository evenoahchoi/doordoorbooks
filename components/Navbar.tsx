"use client"; // this is a client component
import React, { useState } from "react";
import { Link } from "react-scroll";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useTheme } from "next-themes"; // 'next-themes' 라이브러리를 사용한다고 가정합니다.

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
];

export default function Navbar() {
  const { theme, setTheme } = useTheme(); // 'systemTheme'은 여기서 사용되지 않으므로 제거
  const [navbar, setNavbar] = useState(false);

  // 현재 테마를 가져오는 로직 수정
  const currentTheme = theme === "system" ? theme : theme;

  return (
    <header className="w-full fixed top-0 z-50">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to="home">
              <div className="container flex items-center space-x-2">
                <h2 className="text-2xl font-bold">도도북스</h2>
              </div>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {NAV_ITEMS.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.page}
                  className="text-neutral-900 dark:text-neutral-100 hover:text-neutral-500"
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
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
