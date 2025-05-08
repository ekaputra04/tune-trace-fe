"use client";

import BubbleChatFromSystem from "@/components/BubbleChatFromSystem";
import BubbleChatFromUser from "@/components/BubbleChatFromUser";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { RefreshCcw, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import BubbleChatLoadingFromSystem from "./BubbleChatLoadingFromSystem";
import { ModeToggle } from "./mode-toggle";

interface BubbleChatInterface {
  text: string;
  title?: string;
  artist?: string;
  type: "user" | "system";
}

export default function Chat() {
  const [userInput, setUserInput] = useState("");
  const [bubbleChats, setBubbleChats] = useState<BubbleChatInterface[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // tampilkan pesan awal dari sistem saat pertama kali
    setBubbleChats([
      {
        text: "Welcome to Tune Trace! Please ask me anything about music.",
        type: "system",
      },
    ]);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [bubbleChats, isLoading]);

  async function handleSubmit() {
    if (!userInput.trim()) return;

    const newUserChat: BubbleChatInterface = {
      text: userInput,
      type: "user",
    };

    setBubbleChats((prev) => [...prev, newUserChat]);
    setUserInput("");
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/search`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: userInput,
            count: 10,
          }),
        }
      );

      const data = await response.json();

      if (response.ok && data.results?.length > 0) {
        const result = data.results[0]; // hanya ambil yang pertama
        const lyricChat: BubbleChatInterface = {
          text: result.lyric,
          title: result.title,
          artist: result.artist,
          type: "system",
        };
        setBubbleChats((prev) => [...prev, lyricChat]);
      } else {
        setBubbleChats((prev) => [
          ...prev,
          { text: "No matching lyrics found.", type: "system" },
        ]);
      }
    } catch (err) {
      console.error(err);
      setBubbleChats((prev) => [
        ...prev,
        { text: "An error occurred. Please try again.", type: "system" },
      ]);
    } finally {
      setIsLoading(false);
      setBubbleChats((prev) => [
        ...prev,
        { text: "Please insert another lyric", type: "system" },
      ]);
    }
  }

  return (
    <div>
      <div className="top-0 right-0 left-0 fixed flex justify-between items-center bg-background/80 px-8 py-4 w-full">
        <h1 className="font-semibold text-gray-500 dark:text-white text-xl">
          Tune Trace
        </h1>
        <div className="flex items-center gap-2">
          <Button
            variant={"outline"}
            onClick={() =>
              setBubbleChats([
                {
                  text: "Welcome to Tune Trace! Please ask me anything about music.",
                  type: "system",
                },
              ])
            }
            className="hover:cursor-pointer"
          >
            <RefreshCcw />
          </Button>
          <ModeToggle />
        </div>
      </div>
      <div className="space-y-4 px-8 md:px-16 lg:px-32 xl:px-48 pt-16 pb-24">
        {bubbleChats.map((chat, index) =>
          chat.type === "user" ? (
            <BubbleChatFromUser key={index} text={chat.text} />
          ) : (
            <BubbleChatFromSystem
              key={index}
              text={chat.text}
              title={chat.title}
              artist={chat.artist}
            />
          )
        )}
        {isLoading && <BubbleChatLoadingFromSystem />}
        <div ref={bottomRef} />
      </div>

      <div className="bottom-0 left-0 fixed flex gap-2 bg-background px-8 md:px-16 lg:px-32 xl:px-48 pt-4 pb-8 w-full">
        <Input
          placeholder="Search ..."
          className="w-full"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSubmit();
          }}
        />
        <Button onClick={handleSubmit} disabled={isLoading}>
          <Send />
        </Button>
      </div>
    </div>
  );
}
