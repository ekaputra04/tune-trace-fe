interface BubbleChatFromSystemProps {
  text: string;
}

export default function BubbleChatFromSystem({
  text,
}: BubbleChatFromSystemProps) {
  return (
    <div className="flex justify-start py-2 w-full">
      <div className="bg-gray-200 px-4 py-2 rounded-lg rounded-bl-none">
        <p className="text-black">{text}</p>
      </div>
    </div>
  );
}
