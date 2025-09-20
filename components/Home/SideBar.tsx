"use client";
import {
  Img,
  Video,
  Enhancer,
  Realtime,
  Edit,
  Lipsync,
  MotionTransfer,
  Train,
  Logo,
  Upgrade,
  Settings,
  Assets,
} from "@/components/icons";
import user from "@/assets/icons/user.png";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import Image from "next/image";
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Tool {
  title: string;
  description: string;
  hasNewTag: boolean;
  Icon: React.ElementType;
  bgStyle: string;
  icnStyle: string;
}

const tools: Tool[] = [
  {
    title: "Image",
    description: "Generate images with custom styles in Flux and Ideogram",
    hasNewTag: true,
    Icon: Img,
    bgStyle: "bg-gradient-to-t from-[#D0E3F1] to-[#294962] p-2.5",
    icnStyle: "size-[24px]",
  },
  {
    title: "Video",
    description: "Generate videos with Haiper, Pika, Runway, Luma, and more",
    hasNewTag: false,
    Icon: Video,
    bgStyle: "bg-yellow-500  p-2.5",
    icnStyle: "size-[24px]",
  },
  {
    title: "Realtime",
    description: "Realtime AI rendering on a canvas. Instant feedback loops",
    hasNewTag: false,
    Icon: Realtime,
    bgStyle:
      "bg-gradient-to-t from-[#cef6ff] from-0% via-[#00d2ff] via-35% to-[#009df1] p-2.5",
    icnStyle: "size-[24px]",
  },
  {
    title: "Enhancer",
    description: "Upscale and enhance images and videos up to 22K",
    hasNewTag: true,
    Icon: Enhancer,
    bgStyle: "bg-gradient-to-b from-black to-[#888888] p-2.5",
    icnStyle: "size-[24px]",
  },
  {
    title: "Edit",
    description: "Add objects, change style, or expand photos and generations",
    hasNewTag: true,
    Icon: Edit,
    bgStyle:
      "bg-gradient-to-t from-[#AE91CA] via-[#592A85] via-60% to-[#180728] p-2.5",
    icnStyle: "size-[24px]",
  },
  {
    title: "Video Lipsync",
    description: "Lip sync any video to any audio",
    hasNewTag: true,
    Icon: Lipsync,
    bgStyle:
      "bg-gradient-to-t from-[#BBCA91] via-[#3C878F] via-60% to-[#07280F] p-2.5",
    icnStyle: "size-[24px]",
  },
  {
    title: "Motion Transfer",
    description: "Transfer motion to images and animate characters",
    hasNewTag: true,
    Icon: MotionTransfer,
    bgStyle: "bg-black p-2.5",
    icnStyle: "size-[24px]",
  },
  {
    title: "Train",
    description: "Teach Krea to replicate your style, products, or characters",
    hasNewTag: false,
    Icon: Train,
    bgStyle: "bg-white p-2.5",
    icnStyle: "size-[24px] ",
  },
  {
    title: "Assets",
    description: "Your Assets",
    hasNewTag: false,
    Icon: Assets,
    bgStyle: "bg-transparent",
    icnStyle: "size-[44px] fill-blue-500 ",
  },
];

interface Account {
  title: string;
  Icon?: React.ElementType;
  img?: string;
  bgStyle: string;
  icnStyle: string;
}

const account: Account[] = [
  {
    title: "Upgrade",
    Icon: Upgrade,
    bgStyle: "bg-black dark:bg-white p-2.5",
    icnStyle: "size-[24px] text-white dark:text-black",
  },
  {
    title: "Profile",
    img: user.src,
    bgStyle: "bg-transparent ",
    icnStyle: "size-[28px]",
  },
  {
    title: "Setting",
    Icon: Settings,
    bgStyle: "bg-muted p-2.5",
    icnStyle: "size-[24px] ",
  },
];

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const SideBar = ({open, setOpen}: SidebarProps) => {
  return (
    <aside
      className={`fixed inset-y-0 z-40 top-0 left-0 max-h-screen h-screen transform ${
        open ? "translate-0" : "-translate-x-full"
      } md:-translate-x-full transition-transform duration-400 w-[300px] sm:w-[360px] px-4.5 pb-40 space-y-6 bg-white overflow-auto hide-scrollbar dark:bg-black`}
    >
      <div className="sticky top-0 py-3.5 dark:bg-black bg-white flex justify-between ">
        <X
          onClick={() => {
            setOpen(false);
          }}
          className="size-6"
        />
        <Image src={user} alt="user_icon" className="size-[20px]" />
      </div>
      <div className="flex gap-3 items-center">
        <div className="p-2.5 rounded-lg bg-black dark:bg-white">
          <Logo className="size-6 fill-white dark:fill-black" />
        </div>
        <span className="text-sm">Home</span>
      </div>

      <div>
        <h2 className="text-xl font-medium">Account</h2>
        <div className="space-y-4 mt-2">
          {account.map((item, idx) => (
            <div className="flex justify-between" key={idx}>
              <div className="flex gap-3 items-center">
                <div className={`${item.bgStyle} rounded-xl`}>
                  {item.Icon ? (
                    <item.Icon className={` ${item.icnStyle} size-[24px]`} />
                  ) : (
                    <div className="size-[44px]">
                      <Image
                        src={item.img ?? ""}
                        alt={item.title}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
                <span className="text-sm">{item.title}</span>
              </div>
              <Button
                variant="secondary"
                size="lg"
                className={`  ${
                  idx === 0 ? "bg-blue-600 hover:bg-blue-500/90 text-white" : ""
                } rounded-full leading-0`}
              >
                {idx === 0 ? "Get Pro" : "Open"}
              </Button>
            </div>
          ))}
        </div>
      </div>

      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-xl font-medium">
            Apps
          </AccordionTrigger>
          <AccordionContent className="space-y-4 mt-2">
            {tools.map((tool, idx) => (
              <div className="flex justify-between" key={idx}>
                <div className="flex gap-3 items-center">
                  <div className={`${tool.bgStyle} rounded-lg`}>
                    <tool.Icon className={` ${tool.icnStyle} text-white`} />
                  </div>
                  <span className="text-sm">{tool.title}</span>
                </div>
                <Button
                  variant="secondary"
                  size="lg"
                  className="rounded-full leading-0"
                >
                  Open
                </Button>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div>
        {/* className="text-xl font-medium" */}

        <div></div>
      </div>

      <div>
        <h2 className="text-xl font-medium">Sessions</h2>
        <div className="flex items-center gap-3 mt-2">
          <div className="rounded-lg bg-muted size-[44px]" />
          <div className="">
            <p className="text-sm">An igloo village glowing</p>
            <div className="flex gap-1 items-center text-muted-foreground">
              <Realtime className="size-[12px]" />{" "}
              <span className="text-xs">Realtime</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
