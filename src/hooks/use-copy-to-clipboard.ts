import { useState } from "react";

export const useCopyToClipboard = (timeout: number = 2000) => {
  const [copied, setCopied] = useState(false);

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), timeout);
    } catch (err) {
      console.error("Failed to copy to clipboard:", err);
    }
  };

  return { copied, copy };
};
