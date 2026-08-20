import { cn } from "@/utils/cn";

interface UnderlineSwashProps {
  className?: string;
}

export default function UnderlineSwash({ className }: UnderlineSwashProps) {
  return (
    <svg
      viewBox="0 0 160 12"
      fill="none"
      xmlns="http://www/w3/org/2000/svg"
      className={cn("text-primary h-3 w-full max-w-40", className)}
      aria-hidden="true"
    >
      <path d="M2 9C30 2 90 2 158 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
