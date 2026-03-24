"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      
      const rect = sectionRef.current.getBoundingClientRect()
      const sectionHeight = rect.height
      const scrolled = -rect.top
      
      // Calculate progress (0 meaning section is at top, 1 meaning scrolled past)
      // We start fading early as user scrolls down.
      const progress = Math.max(0, Math.min(1, scrolled / (sectionHeight * 0.6)))
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const opacity = 1 - scrollProgress
  const translateY = scrollProgress * -50 // Lifts it up 50px

  return (
    <section 
      ref={sectionRef}
      className="px-6 py-24 md:px-12 md:py-32 lg:px-24 flex flex-col items-center justify-center min-h-[80vh] text-center"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-12">
        <h1 
          style={{ 
            opacity, 
            transform: `translateY(${translateY}px)`,
            transition: 'opacity 0.1s linear, transform 0.1s linear'
          }}
          className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tighter uppercase leading-[0.9] text-balance"
        >
          Associate <br />
          Software <br />
          Engineer <br />
          (Flutter)<span className="inline-block align-top text-[0.4em] md:text-[0.3em] ml-2">©</span>
        </h1>

        <div className="w-full border-t border-border pt-6 mt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-foreground">
            <p className="whitespace-nowrap">Currently crafting experiences at Melento</p>
            <p className="whitespace-nowrap">(2021 — Present)</p>
          </div>
        </div>

        <Link
          href="mailto:tejas_s.u@yahoo.com"
          className="inline-flex items-center gap-2 text-base md:text-lg font-bold uppercase tracking-[0.2em] underline underline-offset-8 transition-all hover:text-muted-foreground hover:gap-3"
        >
          Let's connect
          <ArrowUpRight className="h-5 w-5" />
        </Link>

        <div className="aspect-[3/4] w-full max-w-xs rounded-lg border border-border bg-neutral-100 dark:bg-neutral-800 mx-auto" />

      </div>
    </section>
  )
}
