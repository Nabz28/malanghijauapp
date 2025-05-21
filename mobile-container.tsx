import type React from "react"
import { cn } from "@/lib/utils"

interface MobileContainerProps {
  children: React.ReactNode
  className?: string
}

export function MobileContainer({ children, className }: MobileContainerProps) {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-stone-200 p-4">
      <div
        className={cn(
          "w-full max-w-sm aspect-[9/16] bg-white rounded-xl overflow-hidden shadow-lg flex flex-col",
          className,
        )}
      >
        {children}
      </div>
    </div>
  )
}
