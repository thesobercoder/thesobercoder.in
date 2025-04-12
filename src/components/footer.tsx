import { cn } from "@/lib/utils";

export function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={cn(
        "flex flex-col items-center w-full mb-8 text-xs",
        className
      )}
    >
      <span>{new Date().getFullYear()} All rights reserved.</span>
    </footer>
  );
}
