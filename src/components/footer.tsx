import { cn } from "@/lib/client";

export interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  return (
    <footer
      className={cn(
        "flex flex-col items-center w-full mb-8 text-xs",
        className,
      )}
    >
      <span>{new Date().getFullYear()} All rights reserved.</span>
    </footer>
  );
};
