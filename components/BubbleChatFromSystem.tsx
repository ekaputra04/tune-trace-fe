interface BubbleChatFromSystemProps {
  text: string;
  title?: string;
  artist?: string;
}

export default function BubbleChatFromSystem({
  text,
  title,
  artist,
}: BubbleChatFromSystemProps) {
  const parsedText = text.split(/(\*\*.*?\*\*)/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    } else {
      return <span key={index}>{part}</span>;
    }
  });

  return (
    <div className="flex justify-start py-2 w-full">
      <div className="bg-secondary px-4 py-2 rounded-lg rounded-bl-none">
        {title && (
          <p className="font-bold text-black dark:text-slate-200">
            Title: {title}
          </p>
        )}
        {artist && (
          <p className="font-semibold text-black dark:text-slate-200">
            Artist: {artist}
          </p>
        )}
        <p className="text-black dark:text-slate-200">{parsedText}</p>
      </div>
    </div>
  );
}
