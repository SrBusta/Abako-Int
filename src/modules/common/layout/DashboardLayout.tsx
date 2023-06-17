import Head from "next/head";
import React from "react";
import { ThemeToggle } from "../components/ThemeToggle";
import { Route, routes } from "../routes";
import Link from "next/link";
import { autoUpdate, useFloating } from "@floating-ui/react";
import { useRouter } from "next/router";
import {
  SignOutButton,
  SignedIn,
  UserButton,
  UserProfile,
  useUser,
} from "@clerk/nextjs";
import { FaSignOutAlt } from "react-icons/fa";

type DasboardLayoutProps = {
  children: React.ReactNode;
};

export const DashboardLayout = ({ children }: DasboardLayoutProps) => {
  const { user } = useUser();

  return (
    <SignedIn>
      <Head>
        <title>Dashboard</title>
      </Head>

      {/* 
    !----------------------- Dashboard -----------------------!
    */}

      <div className="flex h-screen flex-col-reverse  bg-white dark:bg-neutral-800 md:flex-row">
        <div className="scrollbar  bottom-0 z-50 flex h-12 max-h-screen w-full shrink-0 flex-row border-r-[1px] border-neutral-50 bg-gray-100  py-2 pl-2 dark:border-neutral-600 dark:bg-neutral-700 md:h-full md:w-20 md:flex-col md:overflow-x-hidden md:overflow-y-scroll">
          <div className="hidden md:block">
            <ThemeToggle />

            {/*Image-Business */}
            <div className="mt-7  rounded-full"></div>
          </div>

          {/*option-menu */}
          <div className="w-full flex-1 md:my-10 md:space-y-20">
            <ul className="flex flex-row space-x-2 md:flex-col md:space-x-0 md:space-y-10">
              {routes.map(({ icon, name, path }, index) => (
                <SidebarItem icon={icon} name={name} path={path} key={index} />
              ))}
            </ul>
          </div>

          {/*Btn-Logout */}
          <div className="mb-5 hidden cursor-pointer justify-center align-middle md:flex ">
            <SignOutButton>
              <FaSignOutAlt className="text-2xl" />
            </SignOutButton>
          </div>
        </div>

        <div className="grow">
          <div className="flex border-b bg-white px-4 py-2 shadow-md dark:border-neutral-700 dark:bg-neutral-900">
            <div className="text-lg"> Gestion de Inventarios - Tienda Musical </div>
            <div className=" ml-auto flex items-center gap-3 px-4 text-neutral-600">
              <span className="text-lg font-medium capitalize">
                {user?.fullName}
              </span>
              <UserButton afterSignOutUrl="/login" />
            </div>
            {/* <Navbar colors={color} name={active} user={data.username} /> */}
          </div>

          {children}
        </div>
      </div>
    </SignedIn>
  );
};

export const SidebarItem = ({ name: title, icon: Icon, path: to }: Route) => {
  const { reference, floating, strategy, x, y } = useFloating({
    placement: "right",
    whileElementsMounted: autoUpdate,
  });

  const { pathname } = useRouter();

  const isInRoute = pathname.endsWith(to || "");

  return (
    <li className={`group  flex w-full justify-center `}>
      <div>
        <Link href={to || ""}>
          <div
            ref={reference}
            className={`
            hover:bg-neutral-xl rounded-xl p-2 transition-all duration-[300ms]   ease-in-out
            ${
              isInRoute
                ? "bg-blue-100 text-blue-500 hover:rounded-[50px] dark:bg-blue-600 dark:text-white"
                : "text-neutral-500  hover:bg-neutral-100 hover:text-blue-500 dark:hover:bg-neutral-800"
            }
            `}
          >
            {Icon && <Icon className={`h-6 w-6 `} />}
          </div>
        </Link>
      </div>

      <div
        ref={floating}
        style={{
          position: strategy,
          top: y ?? 0,
          left: x ?? 0,
          width: "max-content",
        }}
        className="invisible sticky z-50 ml-6 rounded-lg border-[1px] bg-white p-2 text-xs  font-medium text-neutral-400 shadow-xl group-hover:visible dark:border-neutral-600 dark:bg-neutral-800"
      >
        {title}
      </div>
    </li>
  );
};
