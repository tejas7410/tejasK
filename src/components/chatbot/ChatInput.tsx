import { useState } from "react";
import { SendHorizontal } from "lucide-react";

interface Props {
  onSend: (message: string) => void;
  loading: boolean;
}

export default function ChatInput({ onSend, loading }: Props) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim() || loading) return;

    onSend(text);
    setText("");
  };

  return (
    <div className="border-t dark:border-gray-700 p-4 flex gap-2">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSend();
          }
        }}
        placeholder="Ask me anything about Tejas..."
        className="flex-1 rounded-xl border px-4 py-3 dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
      />

      <button
        onClick={handleSend}
        disabled={loading}
        className="bg-sky-500 hover:bg-sky-600 disabled:bg-gray-400 text-white rounded-xl px-4 transition"
      >
        <SendHorizontal size={20} />
      </button>
    </div>
  );
}