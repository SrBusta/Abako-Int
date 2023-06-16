import { useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import Feactures from "~/modules/common/components/PageMain/Feactures";
import Footer from "~/modules/common/components/PageMain/Footer";
import Header from "~/modules/common/components/PageMain/Header";
import Plan from "~/modules/common/components/PageMain/Plan";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const { user, isSignedIn } = useUser();

  const [isVisable, setIsVisable] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 500) {
      setIsVisable(true);
    } else {
      setIsVisable(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      // quitar listener
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      <div className=" bg-black">
        <a
          href="#inicio"
          className={
            isVisable
              ? "fixed bottom-0 right-0 z-30 m-6 opacity-100 transition-all duration-500"
              : "bottom-0 right-0 z-50 m-6 hidden opacity-0 transition-all"
          }
        >
          {/* <FontAwesomeIcon icon={faArrowCircleUp} size="3x" className="text-gray-400 opacity-70 " /> */}
        </a>

        <Header />

        <Feactures />

        <Plan />

        <Footer />
      </div>
    </>
  );
};

export default Home;
