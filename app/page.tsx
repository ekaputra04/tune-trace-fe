import Chat from "@/components/Chat";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { RefreshCcw } from "lucide-react";

export default function Home() {
  return (
    <div className="max-h-screen">
      <div className="top-0 right-0 left-0 fixed flex justify-between items-center bg-background/80 px-8 py-4 w-full">
        <h1 className="font-semibold text-gray-500 dark:text-white text-xl">
          Tune Trace
        </h1>
        <div className="flex items-center gap-2">
          <Button variant={"outline"}>
            <RefreshCcw />
          </Button>
          <ModeToggle />
        </div>
      </div>
      <Chat />
    </div>
  );
}
