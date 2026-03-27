'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ChevronDown, Github, Globe } from "lucide-react"
import Link from "next/link"

const ventures = [
  {
    title: "Widgets & Co.",
    subtitle: "Independent Development Venture",
    period: "2022 - Present",
    link: "https://play.google.com/store/apps/dev?id=7665399616747596042",
    linkType: "playstore",
    details: [
      "Founded and operated an independent venture delivering **mobile applications and web solutions**, managing the full product lifecycle from development to deployment.",
      "Developed and published multiple **Flutter-based applications** on the Google Play Store, focusing on performance, stability, and clean UI architecture.",
      "Built **responsive websites** using modern frontend tools, ensuring consistent user experience across devices and screen sizes.",
      "Applied **structured state management and modular UI design**, enabling scalability and maintainability across projects.",
      "Handled **version control, release management, and iterative updates** independently using Git and Play Store deployment workflows."
    ]
  }

]

export function Ventures() {
  return (
    <section className="px-6 py-16 md:px-12 md:py-24 lg:px-24 lg:py-32">
      <div className="w-full">
        <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-12">
          Ventures
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {ventures.map((venture, index) => (
            <AccordionItem
              key={index}
              value={`venture-${index}`}
              className="border-b border-border/50 py-2 group overflow-hidden hover-bounce"
            >
              <AccordionTrigger
                className="hover:no-underline py-8 transition-all duration-300 data-[state=open]:bg-muted/30 [&>svg]:hidden"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-baseline md:justify-between w-full text-left">
                  <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:gap-6">
                    <span className="text-2xl font-bold md:text-3xl lg:text-4xl tracking-tight">
                      {venture.title}
                    </span>
                    <span className="hidden text-muted-foreground md:inline text-xl opacity-30">—</span>
                    <span className="text-lg text-muted-foreground md:text-xl font-medium">
                      {venture.subtitle}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs md:text-sm font-bold uppercase tracking-widest bg-muted px-2 py-1 rounded text-muted-foreground/80 md:bg-transparent md:px-0 md:py-0">
                      {venture.period}
                    </span>
                    {venture.link && (
                      <Link
                        href={venture.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 hover:bg-primary/10 rounded-full transition-colors"
                      >
                        {venture.linkType === 'github' ? <Github className="h-5 w-5" /> : <Globe className="h-5 w-5" />}
                      </Link>
                    )}
                    <ChevronDown className="h-6 w-6 text-muted-foreground transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-6 pb-12 px-2 md:px-4">
                <ul className="grid grid-cols-1 gap-4 max-w-4xl">
                  {venture.details.map((detail, idx) => {
                    const parts = detail.split(/(\*\*.*?\*\*)/g);
                    return (
                      <li key={idx} className="text-base md:text-lg text-muted-foreground leading-relaxed flex items-start gap-4 group/item">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/20 group-hover/item:bg-primary transition-colors duration-300" />
                        <span className="grow">
                          {parts.map((part, i) =>
                            part.startsWith('**') && part.endsWith('**')
                              ? <strong key={i} className="text-foreground font-semibold">{part.slice(2, -2)}</strong>
                              : part
                          )}
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
