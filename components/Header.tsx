"use client";

import React from "react";
import {
  Home,
  Img,
  Video,
  Enhancer,
  Realtime,
  Edit,
  Assets,
  Logo,
  ArrowDown,
  Gallery,
  Menu,
} from "@/components/icons";
import user from "@/assets/icons/user.png";
import { Bell, Headset, Moon, SunMedium } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";

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

interface HeaderProps {
  setOpen: (open: boolean) => void;
}


const Header = ({setOpen}: HeaderProps) => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className="fixed md:top-5 top-2 left-0 right-0 z-20 px-4 md:px-8 max-w-[1536px] mx-auto w-full ">
      <nav className="flex justify-between items-center">
        <div className="group flex gap-4 lg:gap-8 items-center ">
          <Logo className="size-5.5 dark:fill-white" />
          <div
            tabIndex={0}
            className=" flex items-center justify-start lg:gap-3 gap-2 bg-muted px-2 py-1 rounded-full hover:cursor-pointer max-lg:w-16 max-lg:group-hover:w-full max-lg:group-focus-within:w-full transition-all duration-800 overflow-hidden"
          >
            <Image src={user} alt="user_icon" className="w-[20px]" />
            <span className="block max-lg:w-0 group-hover:w-full group-focus-within:w-full transition-all duration-800 overflow-hidden">
              enchantedblithellama
            </span>
            <div className="">
              <ArrowDown className="size-3 " />
            </div>
          </div>
        </div>

        <div className="hidden md:flex p-1.5 gap-1 bg-muted rounded-2xl">
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
                className={` ${
                  idx === 0 ? "dark:text-black darkfill-black" : ""
                }  size-4.5`}
              />
              <span className="absolute -bottom-10 hidden group-hover:block bg-muted rounded-full p-1.5 leading-none text-sm font-semibold">
                {icon.label}
              </span>
            </a>
          ))}
        </div>

        <div className=" flex gap-3 ">
          <div className="hidden lg:flex items-center justify-center gap-2 bg-muted px-2 py-1 rounded-full">
            <Gallery className="size-4.5 " />
            Gallery
          </div>
          <div className="hidden lg:flex items-center justify-center gap-3 bg-muted px-2 py-1 rounded-full">
            <Headset className="size-4.5" />
            Support
          </div>
          <div className="hidden md:flex items-center justify-center gap-3 bg-muted p-2 rounded-full">
            <Bell className="size-4.5 fill-black dark:fill-white" />
          </div>
          <div className="flex items-center justify-center gap-3 bg-muted p-2 rounded-full">
            {theme === "light" ? (
              <SunMedium
                fill="black"
                className="size-4.5"
                onClick={toggleTheme}
              />
            ) : (
              <Moon fill="white" className="size-4.5" onClick={toggleTheme} />
            )}
          </div>
          <div className="hidden lg:flex items-center hover:cursor-pointer">
            <Image src={user} alt="user_icon" className="w-[20px]" />
          </div>
          <div className="md:hidden flex items-center">
            <Menu onClick={() => setOpen(true)} className="size-5" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
