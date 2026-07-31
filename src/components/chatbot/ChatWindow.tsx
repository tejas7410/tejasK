import { X } from "lucide-react";
import { motion } from "framer-motion";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
interface Props {
  close: () => void;
  chat: any;
}

export default function ChatWindow({ close, chat }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="
        fixed
        bottom-6
        right-6
        z-50

        w-[380px]
        h-[600px]

        rounded-2xl

        bg-white
        dark:bg-gray-900

        shadow-2xl

        flex
        flex-col

        overflow-hidden
      "
    >
      {/* Header */}
      <div className="bg-sky-500 text-white p-4 flex items-center justify-between">
        <div>
          <h2 className="font-semibold text-lg">
            Ask Tejas AI
          </h2>

          <p className="text-sm text-sky-100">
            Portfolio Assistant
          </p>
        </div>

        <button
          onClick={close}
          className="hover:bg-sky-600 rounded-full p-2 transition"
        >
          <X size={20} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4">

  {chat.messages.length === 0 && (
    <div className="bg-sky-50 dark:bg-gray-800 rounded-xl p-4">
      <h3 className="font-semibold mb-2">
        👋 Welcome!
      </h3>

      <p className="text-sm text-gray-700 dark:text-gray-300">
        I'm Tejas' AI assistant.
      </p>

      <ul className="mt-3 text-sm space-y-1">
        <li>• Experience</li>
        <li>• Projects</li>
        <li>• Skills</li>
        <li>• Education</li>
        <li>• Contact</li>
      </ul>
    </div>
  )}

  {chat.messages.map((message: any, index: number) => (
    <ChatMessage
      key={index}
      role={message.role}
      content={message.content}
    />
  ))}

</div>

      <ChatInput
  loading={chat.loading}
  onSend={chat.ask}
/>
    </motion.div>
  );
}