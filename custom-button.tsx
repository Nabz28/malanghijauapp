"use client"

import type React from "react"
import Link from "next/link"

interface CustomButtonProps {
  href?: string
  onClick?: () => void
  className?: string
  children: React.ReactNode
  color: "primary" | "secondary" | "green" | "red"
}

export function CustomButton({ href, onClick, className, children, color }: CustomButtonProps) {
  const colorStyles = {
    primary: "bg-[#16a34a] hover:bg-[#15803d]",
    secondary: "bg-[#22c55e] hover:bg-[#16a34a]",
    green: "bg-[#22c55e] hover:bg-[#16a34a]",
    red: "bg-[#ef4444] hover:bg-[#dc2626]",
  }

  const buttonClass = `w-full py-3 rounded-xl text-white font-semibold text-center flex items-center justify-center ${colorStyles[color]} ${className || ""}`

  if (href) {
    return (
      <Link href={href} className={buttonClass}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={buttonClass}>
      {children}
    </button>
  )
}
