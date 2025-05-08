import BubbleChatFromSystem from "@/components/BubbleChatFromSystem";
import BubbleChatFromUser from "@/components/BubbleChatFromUser";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { RefreshCcw } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="flex justify-between items-center p-8">
        <h1 className="font-semibold text-gray-500 dark:text-white text-3xl">
          Tune Trace
        </h1>
        <div className="flex items-center gap-2">
          <Button variant={"outline"}>
            <RefreshCcw />
          </Button>
          <ModeToggle />
        </div>
      </div>
      <div className="px-8 md:px-16 lg:px-32 xl:px-48">
        <BubbleChatFromUser text="Ini dari user" />
        <BubbleChatFromSystem text="Ini dari system" />
        <BubbleChatFromUser text="Ini dari user 2" />
        <BubbleChatFromSystem text="Ini dari system 2" />
      </div>
    </div>
  );
}
