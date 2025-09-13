import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <p className="text-4xl font-semibold uppercase">
        Your New Project Begins Here
      </p>
      <p className="mt-8">Next.js + Tailwind + Shadcn</p>

      <Button className="mt-4 hover:cursor-pointer">
        Click Me
      </Button>
    </div>
  );
}
