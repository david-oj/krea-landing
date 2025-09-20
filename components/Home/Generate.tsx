import {
  Img,
  Video,
  Enhancer,
  Realtime,
  Edit,
  Lipsync,
  MotionTransfer,
  ArrowDown,
  Train,
} from "@/components/icons";
import { Button } from "../ui/button";

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
    bgStyle: "bg-gradient-to-t from-[#D0E3F1] to-[#294962]",
    icnStyle: "sm:size-[28px] size-[24px]",
  },
  {
    title: "Video",
    description: "Generate videos with Haiper, Pika, Runway, Luma, and more",
    hasNewTag: false,
    Icon: Video,
    bgStyle: "bg-yellow-500",
    icnStyle: "sm:size-[28px] size-[24px]",
  },
  {
    title: "Realtime",
    description: "Realtime AI rendering on a canvas. Instant feedback loops",
    hasNewTag: false,
    Icon: Realtime,
    bgStyle:
      "bg-gradient-to-t from-[#cef6ff] from-0% via-[#00d2ff] via-35% to-[#009df1]",
    icnStyle: "sm:size-[28px] size-[24px]",
  },
  {
    title: "Enhancer",
    description: "Upscale and enhance images and videos up to 22K",
    hasNewTag: true,
    Icon: Enhancer,
    bgStyle: "bg-gradient-to-b from-black to-[#888888]",
    icnStyle: "sm:size-[28px] size-[24px]",
  },
  {
    title: "Edit",
    description: "Add objects, change style, or expand photos and generations",
    hasNewTag: true,
    Icon: Edit,
    bgStyle:
      "bg-gradient-to-t from-[#AE91CA] via-[#592A85] via-60% to-[#180728]",
    icnStyle: "sm:size-[28px] size-[24px]",
  },
  {
    title: "Video Lipsync",
    description: "Lip sync any video to any audio",
    hasNewTag: true,
    Icon: Lipsync,
    bgStyle:
      "bg-gradient-to-t from-[#BBCA91] via-[#3C878F] via-60% to-[#07280F]",
    icnStyle: "sm:size-[28px] size-[24px]",
  },
  {
    title: "Motion Transfer",
    description: "Transfer motion to images and animate characters",
    hasNewTag: true,
    Icon: MotionTransfer,
    bgStyle: "bg-black",
    icnStyle: "sm:size-[28px] size-[24px]",
  },
  {
    title: "Train",
    description: "Teach Krea to replicate your style, products, or characters",
    hasNewTag: false,
    Icon: Train,
    bgStyle: "bg-white",
    icnStyle: "sm:size-[28px] size-[24px]",
  },
];

const Generate = () => {
  return (
    <section className="section">
      <div className="flex justify-between">
        <h2 className="heading">Generate</h2>
        <Button variant="link" className="text-blue-400 medium ">
          <ArrowDown className="size-3 stroke-3 stroke-blue-400" />
          Show all
        </Button>
      </div>

      <div className="mt-4 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-col-1 gap-y-4 ">
        {tools.map((tool, idx) => (
          <div
            className="p-3 flex lg:gap-3 gap-2 items-center rounded-2xl hover:bg-muted"
            key={idx}
          >
            <div className={`${tool.bgStyle}  p-2.5 sm:p-4 rounded-lg sm:rounded-2xl `}>
              <tool.Icon className={`${tool.icnStyle} text-white `} />
            </div>

            <div className="flex-1">
              <div className="flex gap-2 items-center">
                <h3 className="text-xl font-medium max-sm:text-base">{tool.title}</h3>
                {tool.hasNewTag && (
                  <span className="px-2 max-sm:text-sm text-white rounded-full size-fit bg-blue-500">
                    New
                  </span>
                )}
              </div>
              <p className="text-muted-foreground text-xs sm:text-sm">
                {tool.description}
              </p>
            </div>

            <Button variant="secondary" size="lg" className="rounded-full">
              Open
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Generate;
