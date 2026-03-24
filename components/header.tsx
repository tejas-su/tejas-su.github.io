"use client"

import { useState } from "react"
import Link from "next/link"
import { Linkedin, Github, Dribbble, Instagram, Mail } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm px-6 py-6 md:px-12 lg:px-24">
      <div className="flex items-center justify-between">
        <div className="text-base font-bold tracking-tight underline underline-offset-4 decoration-2">S U TEJAS</div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-4 md:flex">
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 w-8 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </Link>
          <Link
            href="https://github.com/tejas-su"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 w-8 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </Link>
          <Link
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 w-8 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Dribbble"
          >
            <Dribbble className="h-4 w-4" />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 w-8 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Instagram"
          >
            <Instagram className="h-4 w-4" />
          </Link>
          <Link
            href="mailto:tejas_s.u@yahoo.com"
            className="flex h-8 w-8 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </Link>
          <ThemeToggle />
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <span
            className={`h-0.5 w-5 bg-foreground transition-all duration-300 ease-in-out ${isOpen ? "translate-y-2 rotate-45" : ""
              }`}
          />
          <span
            className={`h-0.5 w-5 bg-foreground transition-all duration-300 ease-in-out ${isOpen ? "opacity-0" : ""
              }`}
          />
          <span
            className={`h-0.5 w-5 bg-foreground transition-all duration-300 ease-in-out ${isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${isOpen ? "mt-6 max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <nav className="flex flex-col gap-4 border-t border-border pt-6">
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-muted-foreground transition-colors hover:text-foreground"
            onClick={() => setIsOpen(false)}
          >
            <Linkedin className="h-4 w-4" />
            <span className="text-sm">LinkedIn</span>
          </Link>
          <Link
            href="https://github.com/tejas-su"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-muted-foreground transition-colors hover:text-foreground"
            onClick={() => setIsOpen(false)}
          >
            <Github className="h-4 w-4" />
            <span className="text-sm">GitHub</span>
          </Link>
          <Link
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-muted-foreground transition-colors hover:text-foreground"
            onClick={() => setIsOpen(false)}
          >
            <Dribbble className="h-4 w-4" />
            <span className="text-sm">Dribbble</span>
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-muted-foreground transition-colors hover:text-foreground"
            onClick={() => setIsOpen(false)}
          >
            <Instagram className="h-4 w-4" />
            <span className="text-sm">Instagram</span>
          </Link>
          <Link
            href="mailto:tejas_s.u@yahoo.com"
            className="flex items-center gap-4 text-muted-foreground transition-colors hover:text-foreground"
            onClick={() => setIsOpen(false)}
          >
            <Mail className="h-4 w-4" />
            <span className="text-sm">Email</span>
          </Link>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <span className="text-sm text-muted-foreground">Theme</span>
          </div>
        </nav>
      </div>
    </header>
  )
}
