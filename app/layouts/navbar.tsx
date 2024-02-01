"use client";
import * as React from "react";

import { ThemeButton } from "@/components/ui/theme-toggle-button";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertTriangle, LogIn, LogOut, Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";

const Navbar = () => {
  const router = useRouter();
  const { user, logOut } = useAuth();

  console.log(user);

  const handleLogOut = async (e: any) => {
    e.preventDefault();
    try {
      await logOut();
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      // Assuming 768px is your md breakpoint
      setNav(false);
    }
  };

  // Set up event listener for window resize
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 bg-current nav">
      <div>
        <h1 className="text-2xl font-signature ml-2">
          <Link className="link-underline link-underline-black" href="/">
            Logo
          </Link>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 scale-95 hover:scale-100 hover:text-white duration-200 link-underline"
          >
            <Link href={link}>{link}</Link>
          </li>
        ))}
        <ThemeButton />

        {user.email ? (
          <Button variant={"secondary"}>
            {user.email} <LogOut className="ml-1.5" size={20} />
          </Button>
        ) : (
          <Link href={"/login"}>
            <Button size={"icon"} variant={"outline"}>
              <LogIn size={20} />
            </Button>
          </Link>
        )}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <X /> : <Menu />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
