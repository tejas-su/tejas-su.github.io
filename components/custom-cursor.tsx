"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowUpRight } from "lucide-react"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const onMouseEnter = () => setIsVisible(true)
    const onMouseLeave = () => setIsVisible(false)

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isInteractive = 
        target.closest("a") || 
        target.closest("button") || 
        target.getAttribute("role") === "button" ||
        target.classList.contains("cursor-pointer")
      
      setIsHovering(!!isInteractive)
    }

    window.addEventListener("mousemove", onMouseMove)
    window.addEventListener("mouseover", handleHover)
    document.addEventListener("mouseenter", onMouseEnter)
    document.addEventListener("mouseleave", onMouseLeave)

    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("mouseover", handleHover)
      document.removeEventListener("mouseenter", onMouseEnter)
      document.removeEventListener("mouseleave", onMouseLeave)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      {/* Small Precision Dot */}
      <div
        ref={dotRef}
        className="fixed w-1.5 h-1.5 bg-foreground rounded-full -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
        style={{
          left: position.x,
          top: position.y,
        }}
      />
      
      {/* Trailing Ring */}
      <div
        ref={ringRef}
        className={`fixed border border-foreground/30 rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out flex items-center justify-center
          ${isHovering ? 'w-12 h-12 bg-foreground/10 border-foreground scale-110' : 'w-8 h-8 scale-100'}
        `}
        style={{
          left: position.x,
          top: position.y,
        }}
      >
        {isHovering && (
          <ArrowUpRight className="w-4 h-4 text-foreground animate-in zoom-in duration-300" />
        )}
      </div>
    </div>
  )
}
