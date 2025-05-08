import { BeatLoader } from "react-spinners";

export default function BubbleChatLoadingFromSystem() {
  return (
    <div className="flex justify-start py-2 w-full">
      <div className="bg-gray-200 px-4 py-2 rounded-lg rounded-bl-none">
        <div className="flex items-center gap-2">
          <BeatLoader
            color={"#000000"}
            loading={true}
            aria-label="Loading Spinner"
            data-testid="loader"
            size={7}
          />
        </div>
      </div>
    </div>
  );
}
