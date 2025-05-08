interface BubbleChatFromUserProps {
  text: string;
}

export default function BubbleChatFromUser({ text }: BubbleChatFromUserProps) {
  return (
    <div className="flex justify-end py-2 w-full">
      <div className="bg-blue-200 px-4 py-2 rounded-lg rounded-br-none">
        <p className="text-black">{text}</p>
      </div>
    </div>
  );
}
