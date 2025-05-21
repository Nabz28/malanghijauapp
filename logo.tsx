import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-primary", className)}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8 6 5 8 5 12a7 7 0 0014 0c0-4-3-6-7-10z" />
    </svg>
  )
}
