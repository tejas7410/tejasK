import { MessageCircle } from "lucide-react";

interface Props {
  onClick: () => void;
}

export default function ChatButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="
        fixed
        bottom-6
        right-6
        z-50

        h-16
        w-16

        rounded-full

        bg-sky-500
        hover:bg-sky-600

        shadow-xl
        hover:scale-110

        transition-all
        duration-300

        flex
        items-center
        justify-center
      "
    >
      <MessageCircle
        size={30}
        className="text-white"
      />
    </button>
  );
}