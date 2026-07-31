interface Props {
  role: "user" | "assistant";
  content: string;
}

export default function ChatMessage({ role, content }: Props) {
  const isUser = role === "user";

  return (
    <div
      className={`flex mb-4 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
          isUser
            ? "bg-sky-500 text-white"
            : "bg-gray-200 dark:bg-gray-700 dark:text-white"
        }`}
      >
        {content}
      </div>
    </div>
  );
}