import { useState } from "react";
import { sendMessage } from "../services/chatApi";

export interface Message {
  role: "user" | "assistant";
  content: string;
}

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  async function ask(question: string) {
    if (!question.trim()) return;

    // Add user message
    const userMessage: Message = {
      role: "user",
      content: question,
    };

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const response = await sendMessage(question);

      const assistantMessage: Message = {
        role: "assistant",
        content: response.answer,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, I'm unable to respond right now. Please try again later.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return {
    messages,
    loading,
    ask,
  };
}