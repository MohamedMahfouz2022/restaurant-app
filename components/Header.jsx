"use client";
import { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

import Nav from "./Nav";
import NavMobile from "./NavMobile";
import { Button } from "./ui/button";

const Header = () => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      //detect scroll
      setActive(window.scrollY > 25);
    };
    //add event listener
    window.addEventListener("scroll", handleScroll);

    //clear event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header
      className={`${active ? "bg-black-heavy/95 py-2 xl:py-0" : "bg-none py-6"}
    fixed top-0 w-full z-50 left-0 right-0 transition-all duration-200`}
    >
      <div className="container mx-auto">
        {/* logo -- nav -- btn */}
        <div className="w-full flex justify-between items-center">
          {/* logo */}
          <Link href="#home">
            <Image src="/logo.svg" width={75} height={30} alt="" />
          </Link>
          {/* Nav */}
          <Nav
            containerStyles="hidden xl:flex gap-x-12 text-white"
            linkStyles="capitalize"
          />
          {/* btn */}
          <ScrollLink
            to="reservation"
            smooth="true"
            offset={75}
            className="hidden xl:flex"
          >
            <Button variant="orange" size="sm">
              Book a table
            </Button>
          </ScrollLink>
          {/* mobile nav */}
          <NavMobile
            containerStyles="xl:hidden"
            iconStyles="text-3xl"
            linkStyles="uppercase"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
