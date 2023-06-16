import Link from "next/link";
import React, { useState } from "react";
import { IconType } from "react-icons/lib";
import {
  MdAssignmentInd,
  MdOutlineVerifiedUser,
  MdVerifiedUser,
} from "react-icons/md";

function Header() {
  const [showMe, setShowMe] = useState(false);

  function toggle() {
    setShowMe(!showMe);
  }

  return (
    <>
      <section
        className="h-screen"
        id="inicio"
        style={{ scrollSnapAlign: "start" }}
      >
        <div
          style={{ backgroundImage: "url(mainheader.png)" }}
          className="absolute inset-0 z-0 h-screen bg-cover bg-center blur-sm brightness-50 filter"
        />

        <div className="relative flex h-full flex-col">
          <div className="mr-7 mt-3 flex justify-end">
            <a
              href="#"
              className="font-test absolute left-0 z-50 ml-14 mt-8 w-14 select-none text-center text-white brightness-75 filter"
              id="mobile-menu"
            >
              <img src="/logo.png" className="" />
              ABAKO
            </a>
          </div>

          <nav className="flex justify-between p-4 pr-7 lg:justify-end">
            <div className="mr-10 mt-10 hidden w-auto lg:block xl:mr-20">
              <ul className="menu font-test flex select-none items-center justify-center gap-20 text-sm uppercase subpixel-antialiased lg:text-base">
                <li>
                  <a href="#ofrecemos" className="link hover:underline">
                    características
                  </a>
                </li>
                <li>
                  <a href="#planes" className="link hover:underline">
                    Planes
                  </a>
                </li>

                <li>
                  <Link
                    href="/login"
                    className="link text-3xl"
                    onClick={toggle}
                  >
                    <MdAssignmentInd className="" />

                    {/* <FontAwesomeIcon icon={faUserCircle} size="2x" className="text-gray-300 hover:text-yellow-400 " />  */}
                  </Link>
                </li>
              </ul>
            </div>

            <div
              className={
                !showMe
                  ? "absolute inset-0 flex w-screen transform flex-col justify-items-end transition duration-500 lg:hidden "
                  : "mobile-links bg-primary absolute inset-0 flex w-screen  transform flex-col overflow-y-hidden transition duration-500 lg:hidden"
              }
            >
              <div className="mr-7 mt-3 flex justify-end">
                <a
                  href="#"
                  className="m-7 mt-10 w-min flex-shrink "
                  id="mobile-menu"
                  onClick={toggle}
                >
                  {/* <FontAwesomeIcon icon={faBars} size="3x" className="text-gray-200 opacity-70" /> */}
                </a>
              </div>

              <ul
                className={
                  !showMe
                    ? "mobile-links hidden "
                    : "mobile-links  flex h-full w-screen flex-1 flex-col items-center justify-center gap-16 text-center text-2xl uppercase opacity-70"
                }
              >
                <li>
                  <a href="#ofrecemos" className="link" onClick={toggle}>
                    características
                  </a>
                </li>
                <li>
                  <a href="#planes" className="link" onClick={toggle}>
                    Planes
                  </a>
                </li>
                {/* <li>
                    <a href="/login" className="link" onClick={toggle}>Login</a>
                </li> */}
                <li>
                  {/* <a href="/register" className="link" onClick={toggle}>Register</a> */}
                  <Link href="/login" className="link" onClick={toggle}>
                    {/* <FontAwesomeIcon icon={faUserCircle} size="2x" className="text-gray-200 opacity-70" /> */}
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <div className="flex flex-1 flex-col items-center justify-center px-20">
            <h1 className=" select-none text-center text-xl font-bold uppercase text-white subpixel-antialiased md:text-4xl xl:text-5xl">
              Aumenta la productividad de tu tienda
            </h1>

            <Link
              href="/register"
              className=" mt-8 block cursor-pointer rounded-bl-lg border-2 border-yellow-400  p-3 text-xs font-semibold uppercase text-yellow-400  subpixel-antialiased duration-300 hover:bg-yellow-400 hover:text-black focus:bg-white lg:text-lg"
            >
              Comienza ahora
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
