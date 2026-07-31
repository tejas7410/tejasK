import { useState } from "react";

import ChatButton from "./ChatButton";
import ChatWindow from "./ChatWindow";

import { useChat } from "../../hooks/useChat";

export default function Chatbot() {
  const [open, setOpen] = useState(false);

  const chat = useChat();

  return (
    <>
      {!open && (
        <ChatButton
          onClick={() => setOpen(true)}
        />
      )}

      {open && (
        <ChatWindow
          close={() => setOpen(false)}
          chat={chat}
        />
      )}
    </>
  );
}