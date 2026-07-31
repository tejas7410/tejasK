const API_URL = import.meta.env.VITE_API_URL || "";

export interface ChatResponse {
  success: boolean;
  answer: string;
  message?: string;
}

export async function sendMessage(
  question: string
): Promise<ChatResponse> {
  const response = await fetch(`${API_URL}/api/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      question,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to contact AI server.");
  }

  return response.json();
}