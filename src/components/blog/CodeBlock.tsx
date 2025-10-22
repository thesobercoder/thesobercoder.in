"use client";

import { useRef, useState } from "react";
import { Check, Copy } from "lucide-react";

export interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  children: React.ReactNode;
}

export const CodeBlock = ({ children, ...props }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);

  const getCodeText = (): string => {
    if (!preRef.current) return "";
    const codeElement = preRef.current.querySelector("code");
    return codeElement?.textContent || "";
  };

  const handleCopy = async () => {
    const code = getCodeText();
    if (!code) return;

    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="group relative">
      <pre ref={preRef} {...props} className="rounded-lg overflow-hidden">
        {children}
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 rounded-md bg-muted hover:bg-muted/80 opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Copy code"
        title={copied ? "Copied!" : "Copy code"}
      >
        {copied ? (
          <Check className="w-4 h-4 text-green-500" />
        ) : (
          <Copy className="w-4 h-4" />
        )}
      </button>
    </div>
  );
};
