"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Linkedin, Github, Dribbble, Instagram, Copy, Check } from "lucide-react"

export function Footer() {
  const [copied, setCopied] = useState(false)
  const email = "tejas_s.u@yahoo.com"

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const projects = [
    { name: "Crosby: POS Tool Launch", category: "UX Design" },
    { name: "Norman & Co: Scout Product Launch", category: "Brand" },
    { name: "Gardona: Online Store Redesign", category: "Visual Design" },
    { name: "Carmine: Skycast App Launch", category: "Product" },
    { name: "Mobile App Redesign", category: "Mobile App" },
    { name: "Portfolio Website", category: "Web" },
  ]

  const socials = [
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
    { name: "GitHub", icon: Github, href: "https://github.com/tejas-su" },
    { name: "Dribbble", icon: Dribbble, href: "https://dribbble.com" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  ]

  return (
    <footer className="w-full bg-transparent border-t border-border mt-24">
      <div className="px-6 py-16 md:px-12 md:py-24 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column: Name, Title, and Avatar */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold uppercase tracking-tighter">S U Tejas</h2>
              <p className="text-sm text-muted-foreground mt-2 max-w-xs leading-relaxed">
                Associate Software Engineer, currently crafting experiences at Melento.
              </p>
            </div>

            <div className="max-w-[160px] md:max-w-[256px]">
              <Image
                src="/footer.png"
                alt="Footer Branding"
                width={256}
                height={256}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>

          {/* Right Column: CTA, Projects, Socials */}
          <div className="flex flex-col h-full justify-between space-y-16">
            <div className="space-y-8">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-balance">
                Think I'd be a good fit for your team or project? Let's connect.
              </h3>

              <button
                onClick={copyEmail}
                className="group flex items-center gap-3 bg-foreground text-background px-6 py-3 rounded-full hover:opacity-90 transition-all active:scale-95"
              >
                <span className="text-sm font-medium">{email}</span>
                {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4 opacity-70 group-hover:opacity-100" />}
              </button>
            </div>

            <div className="grid grid-cols-2 gap-12 pt-16 border-t border-border/50">
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60">Selected Projects</h4>
                <ul className="space-y-2">
                  {projects.map((project) => (
                    <li key={project.name}>
                      <Link href="#" className="text-sm font-medium hover:text-muted-foreground transition-colors">
                        {project.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60">Socials</h4>
                <ul className="grid grid-cols-1 gap-x-8 gap-y-2">
                  {socials.map((social) => (
                    <li key={social.name}>
                      <Link
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors"
                      >
                        <social.icon className="h-4 w-4" />
                        <span>{social.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="w-full bg-neutral-900 border-t border-white/5 py-4 px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs font-medium uppercase tracking-widest text-white/40">
          <p>Designed & Built from the desk of <span className="text-white">Widgets & Co</span></p>
          <p>Widgets & Co – 2026©</p>
        </div>
      </div>
    </footer>
  )
}
