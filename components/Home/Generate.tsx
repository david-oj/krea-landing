import {
  Img,
  Video,
  Enhancer,
  Realtime,
  Edit,
  Assets,
  Logo,
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
  size: string;
}

const tools: Tool[] = [
  {
    title: "Image",
    description: "Generate images with custom styles in Flux and Ideogram",
    hasNewTag: true,
    Icon: Img,
    bgStyle: "bg-gradient-to-t from-[#D0E3F1] to-[#294962]",
    size: "size-[28px]",
  },
  {
    title: "Video",
    description: "Generate videos with Haiper, Pika, Runway, Luma, and more",
    hasNewTag: false,
    Icon: Video,
    bgStyle: "bg-yellow-500",
    size: "size-[28px]",
  },
  {
    title: "Realtime",
    description: "Realtime AI rendering on a canvas. Instant feedback loops",
    hasNewTag: false,
    Icon: Realtime,
    bgStyle:
      "bg-gradient-to-t from-[#cef6ff] from-0% via-[#00d2ff] via-35% to-[#009df1]",
    size: "size-[28px]",
  },
  {
    title: "Enhancer",
    description: "Upscale and enhance images and videos up to 22K",
    hasNewTag: true,
    Icon: Enhancer,
    bgStyle: "bg-gradient-to-b from-black to-[#888888]",
    size: "size-[28px]",
  },
  {
    title: "Edit",
    description: "Add objects, change style, or expand photos and generations",
    hasNewTag: true,
    Icon: Edit,
    bgStyle:
      "bg-gradient-to-t from-[#AE91CA] via-[#592A85] via-60% to-[#180728]",
    size: "size-[28px]",
  },
  {
    title: "Video Lipsync",
    description: "Lip sync any video to any audio",
    hasNewTag: true,
    Icon: Lipsync,
    bgStyle:
      "bg-gradient-to-t from-[#BBCA91] via-[#3C878F] via-60% to-[#07280F]",
    size: "size-[28px]",
  },
  {
    title: "Motion Transfer",
    description: "Transfer motion to images and animate characters",
    hasNewTag: true,
    Icon: MotionTransfer,
    bgStyle: "bg-black",
    size: "size-[40px]",
  },
  {
    title: "Train",
    description: "Teach Krea to replicate your style, products, or characters",
    hasNewTag: false,
    Icon: Train,
    bgStyle: "bg-white",
    size: "size-[32px] ",
  },
];

const Generate = () => {
  return (
    <section className="section mb-[20rem] ">
      <div className="flex justify-between">
        <h2 className="font-medium text-2xl">Generate</h2>
        <Button variant="link" className="text-blue-400 medium ">
          <ArrowDown className="size-3 stroke-3 stroke-blue-400" />
          Show all
        </Button>
      </div>

      <div className="mt-4 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-col-1 gap-y-4 ">
        {tools.map((tool, idx) => (
          <div
            className="p-3 flex gap-2 justify-between items-center rounded-2xl hover:bg-muted"
            key={idx}
          >
            <div className={`${tool.bgStyle} p-4 rounded-2xl `}>
              <tool.Icon className={`${tool.size} text-white `} />
            </div>

            <div>
              <div className="flex gap-2 items-center">
                <h3 className="text-xl font-medium">{tool.title}</h3>
                {tool.hasNewTag && (
                  <span className="px-2 text-white rounded-full size-fit bg-blue-500">
                    New
                  </span>
                )}
              </div>
              <p className="text-muted-foreground text-sm">
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
