"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export function DotBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme, resolvedTheme } = useTheme()
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let dots: Dot[] = []
    const spacing = 40
    const mouseRadius = 120
    const floatAmplitude = 2
    const dpr = window.devicePixelRatio || 1

    class Dot {
      x: number
      y: number
      originX: number
      originY: number
      size: number
      color: string

      constructor(x: number, y: number, color: string) {
        this.x = x
        this.y = y
        this.originX = x
        this.originY = y
        this.size = 1.4
        this.color = color
      }

      update(mouseX: number, mouseY: number) {
        const dx = mouseX - this.originX
        const dy = mouseY - this.originY
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        // Repulsion logic
        if (distance < mouseRadius) {
          const force = (mouseRadius - distance) / mouseRadius
          const angle = Math.atan2(dy, dx)
          const targetX = this.originX - Math.cos(angle) * force * 30
          const targetY = this.originY - Math.sin(angle) * force * 30
          
          this.x += (targetX - this.x) * 0.15
          this.y += (targetY - this.y) * 0.15
        } else {
          // Return to origin with a bit of "wave" float
          const time = Date.now() * 0.002
          const waveX = Math.sin(time + this.originX * 0.01) * floatAmplitude
          const waveY = Math.cos(time + this.originY * 0.01) * floatAmplitude
          
          this.x += (this.originX + waveX - this.x) * 0.1
          this.y += (this.originY + waveY - this.y) * 0.1
        }
      }

      draw(context: CanvasRenderingContext2D) {
        context.beginPath()
        context.arc(this.x * dpr, this.y * dpr, this.size * dpr, 0, Math.PI * 2)
        context.fillStyle = this.color
        context.fill()
      }
    }

    const initDots = () => {
      // Increased visibility alpha
      const color = (resolvedTheme || theme) === "dark" 
        ? "rgba(255, 255, 255, 0.2)" 
        : "rgba(0, 0, 0, 0.15)"
      dots = []
      for (let x = spacing / 2; x < window.innerWidth; x += spacing) {
        for (let y = spacing / 2; y < window.innerHeight; y += spacing) {
          dots.push(new Dot(x, y, color))
        }
      }
    }

    const resize = () => {
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      initDots()
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      dots.forEach((dot) => {
        dot.update(mouseRef.current.x, mouseRef.current.y)
        dot.draw(ctx)
      })
      animationFrameId = requestAnimationFrame(render)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    window.addEventListener("resize", resize)
    window.addEventListener("mousemove", handleMouseMove)
    
    resize()
    render()

    return () => {
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [theme, resolvedTheme])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  )
}
