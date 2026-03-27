'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ChevronDown } from "lucide-react"

const experiences = [
  {
    role: "Associate Software Engineer",
    company: "Melento",
    period: "July 2025 – Present",
    details: [
      "Owned end-to-end frontend development of a revenue-critical **eSign workflow**, including Aadhaar-based digital signing; built multi-step, state-driven user journeys with robust API orchestration and error handling.",
      "Re-architected the **WebSocket layer** with structured lifecycle management and reconnection strategies, improving real-time reliability and maintainability.",
      "Led adoption of **BLoC with Clean Architecture**, establishing clear state boundaries and separation of concerns for scalable feature development.",
      "Integrated **OCR-based Extract & Compare workflows**, handling complex request/response cycles and structured state updates for document processing.",
      "Delivered the majority of the **Subdots feature**, implementing deeply nested, synchronized scrollable UI with optimized rendering under dynamic data updates.",
      "Built **Microsoft SSO authentication flow**, including secure token exchange, deep-link handling, and session management.",
      "Improved UI performance across high-usage screens, reducing rendering jank by ~60% through widget tree optimization and rebuild control.",
      "Implemented **Firebase Crashlytics** to enhance production monitoring and reduce issue resolution time.",
      "Contributed to additional features including **global search, chat, PDF/video preview, and device utilities**.",
      "Collaborated closely with backend teams to refine API contracts and reduce frontend complexity in evolving UAT environments.",
    ]
  },
  {
    role: "Software Developer Trainee",
    company: "Melento",
    period: "February 2025 – June 2025",
    details: [
      "Built **modular, reusable UI components** and integrated REST APIs across multiple application flows.",
      "Used **Cubit for structured state management**, improving maintainability across screens.",
      "Reduced UI lag and improved responsiveness by optimizing widget rebuild patterns.",
      "Migrated and modernized **Android Gradle configuration** to align with latest Flutter ecosystem standards.",
      "Developed complex UI layouts involving nested scroll views for improved interaction design.",
      "Participated in **code reviews and collaborative development**, maintaining code quality and consistency.",
      "Identified and resolved bugs while contributing to overall app stability and performance improvements.",
    ]
  }
]

export function Experience() {
  return (
    <section className="px-6 py-16 md:px-12 md:py-24 lg:px-24 lg:py-32">
      <div className="w-full">
        <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-12">
          Relevant Experience
        </h2>
        
        <Accordion type="single" collapsible className="w-full">
          {experiences.map((exp, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className="border-b border-border py-2 group overflow-hidden hover-bounce"
            >
              <AccordionTrigger 
                className="hover:no-underline py-8 transition-all duration-300 data-[state=open]:bg-muted/30 [&>svg]:hidden"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-baseline md:justify-between w-full text-left">
                  <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:gap-6">
                    <span className="text-2xl font-bold md:text-3xl lg:text-4xl tracking-tight">
                      {exp.role}
                    </span>
                    <span className="hidden text-muted-foreground md:inline text-xl opacity-50">—</span>
                    <span className="text-lg text-muted-foreground md:text-xl lg:text-2xl font-medium">
                      {exp.company}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs md:text-sm font-bold uppercase tracking-widest bg-muted px-2 py-1 rounded text-muted-foreground/80 md:bg-transparent md:px-0 md:py-0">
                      {exp.period}
                    </span>
                    <ChevronDown className="ml-auto h-6 w-6 text-muted-foreground transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-6 pb-12 px-2 md:px-4">
                <ul className="grid grid-cols-1 gap-4 max-w-4xl">
                  {exp.details.map((detail, idx) => {
                    // Extract bold text
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
