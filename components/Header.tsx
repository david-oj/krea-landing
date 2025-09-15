"use client";

import React from "react";
import Home from "@/components/icons/Home";
import Img from "@/components/icons/Image";
import Video from "@/components/icons/Video";
import Enhancer from "@/components/icons/Enhancer";
import Realtime from "@/components/icons/Realtime";
import Edit from "@/components/icons/Edit";
import Assets from "@/components/icons/Assets";
import Logo from "@/components/icons/Logo";
import User from "@/components/icons/user.png";
import { Bell, Headset, Moon, SunMedium } from "lucide-react";
import ArrowDown from "./icons/ArrowDown";
import Image from "next/image";
import { useTheme } from "next-themes";
import Gallery from "./icons/Gallery";

interface Icons {
  Icon: React.ElementType;
  href: string;
  label: string;
}

const icons: Icons[] = [
  {
    Icon: Home,
    href: "/",
    label: "Home",
  },
  {
    Icon: Img,
    href: "#",
    label: "Image",
  },
  {
    Icon: Video,
    href: "#",
    label: "Video",
  },
  {
    Icon: Enhancer,
    href: "#",
    label: "Enhancer",
  },
  {
    Icon: Realtime,
    href: "#",
    label: "Realtime",
  },
  {
    Icon: Edit,
    href: "#",
    label: "Edit",
  },
  {
    Icon: Assets,
    href: "#",
    label: "Assets",
  },
];

const Header = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className="fixed top-1 left-0 right-0 z-50 px-8  w-full">
      <nav className="flex justify-between items-center">
        <div className="flex gap-4 lg:gap-8 items-center ">
          <Logo className="size-5.5" />
          <div className="flex items-center justify-center gap-3 bg-muted px-2 py-1 rounded-full">
            <Image src={User} alt="user_icon" className="w-[20px]" />
            BenevolentandMighty
            <ArrowDown className="size-3 " />
          </div>
        </div>

        <div className="flex p-1.5 gap-1 bg-muted rounded-2xl">
          {icons.map((icon, idx) => (
            <a
              key={idx}
              href={icon.href}
              className={`relative group ${
                idx === 0
                  ? "bg-white shadow-xs"
                  : "hover:bg-muted-foreground/10"
              } px-4 py-3 rounded-2xl transition duration-100 flex justify-center items-center`}
            >
              <icon.Icon
                className={` ${idx === 0 ? "dark:text-black darkfill-black" : ""}  size-4.5`}
              />
              <span className="absolute -bottom-10 hidden group-hover:block bg-muted rounded-full p-1.5 leading-none text-sm font-semibold">
                {icon.label}
              </span>
            </a>
          ))}
        </div>

        <div className=" flex gap-3 ">
          <div className="flex items-center justify-center gap-2 bg-muted px-2 py-1 rounded-full">
           <Gallery  className="size-4.5 " />
            Gallery
          </div>
          <div className="flex items-center justify-center gap-3 bg-muted px-2 py-1 rounded-full">
            <Headset className="size-4.5" />
            Support
          </div>
          <div className="flex items-center justify-center gap-3 bg-muted p-2 rounded-full">
            <Bell className="size-4.5 fill-black dark:fill-white" />
          </div>
          <div className="flex items-center justify-center gap-3 bg-muted p-2 rounded-full">
            {theme === "light" ? (
              <SunMedium fill="black" className="size-4.5" onClick={toggleTheme}/>
            ) : (
              <Moon fill="white" className="size-4.5" onClick={toggleTheme} />
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
