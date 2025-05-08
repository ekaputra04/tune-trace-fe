"use client";

import BubbleChatFromSystem from "@/components/BubbleChatFromSystem";
import BubbleChatFromUser from "@/components/BubbleChatFromUser";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { Send } from "lucide-react";

export default function Chat() {
  return (
    <div className="">
      <div className="px-8 md:px-16 lg:px-32 xl:px-48 pt-16 pb-24">
        <BubbleChatFromUser text="Ini dari user" />
        <BubbleChatFromSystem text="Ini dari system" />
        <BubbleChatFromUser text="Ini dari user 2" />
        <BubbleChatFromSystem text="Ini dari system 2" />
        <BubbleChatFromSystem text="Ini dari system 2" />
        <BubbleChatFromSystem text="Ini dari system 2" />
        <BubbleChatFromSystem text="Ini dari system 2" />
        <BubbleChatFromSystem text="Ini dari system 2" />
        <BubbleChatFromSystem text="Ini dari system 2" />
        <BubbleChatFromSystem text="Ini dari system 2" />
        <BubbleChatFromSystem text="Ini dari system 2" />
      </div>
      <div className="bottom-0 left-0 fixed flex gap-2 bg-background px-8 md:px-16 lg:px-32 xl:px-48 pt-4 pb-8 w-full">
        <Input placeholder="Search ..." className="w-full" />
        <Button>
          <Send />
        </Button>
      </div>
    </div>
  );
}
