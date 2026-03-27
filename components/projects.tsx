'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ChevronDown, Github, Globe } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Cardamom Care",
    subtitle: "Personal/Academic Project",
    period: "January 2025 - December 2025",
    link: "https://github.com/tejas-su/cardamom_care/",
    linkType: "github",
    details: [
      "Built an end-to-end Flutter application using **BLoC** to manage complex, state-heavy flows for agricultural decision support.",
      "Integrated **on-device TensorFlow models** for leaf disease detection, enabling real-time inference without server dependency.",
      "Designed and implemented a **price prediction pipeline** using agentic networks with **Gemini**, coordinating multiple model steps for temporal forecasting.",
      "Developed and consumed **RESTful APIs** to handle data exchange between ML components and the frontend.",
      "Implemented real-time disease detection workflows and **interactive visualizations** to translate model outputs into actionable insights for farmers.",
    ]
  },
  {
    title: "Scribble — Offline Notes App (Android)",
    subtitle: "Flutter | Sqlite | BLoC",
    period: "2024",
    link: "https://play.google.com/store/apps/details?id=com.widgetsandco.scribble",
    linkType: "store",
    details: [
      "Designed and built a fully offline-first notes application, focusing on **local data reliability and fast UI interactions** rather than cloud dependency.",
      "Implemented structured CRUD flows with SQLite, ensuring predictable state transitions and minimal data corruption risk.",
      "Architected the app using BLoC to isolate business logic from UI, enabling easier feature extension and refactoring.",
      "Delivered user-facing customization such as list/grid layouts and theme switching without degrading performance on low-end devices.",
    ]
  },
  {
    title: "Shrine — Collaborative Project Management App",
    subtitle: "Flutter | Supabase | Postgres",
    period: "2024",
    link: "https://github.com/tejas-su/shrine_app",
    linkType: "github",
    details: [
      "Built a mobile project management system with **real-time collaboration, team chat, and structured task data**.",
      "Designed data models and API interactions using Supabase, balancing schema simplicity with future extensibility.",
      "Integrated authentication, CRUD workflows, and real-time updates while maintaining clear separation between UI and data layers.",
      "Focused on reducing operational complexity by leveraging Supabase’s tooling instead of custom backend overhead.",
    ]
  },
  {
    title: "Krishi Yantra Mela Website",
    subtitle: "Bootstrap Studio | HTML | CSS | Git",
    period: "2024",
    link: "https://krishiyantramela.github.io/index.html",
    linkType: "globe",
    details: [
      "Developed and deployed a **static event website** to present information about Krishi Yantra Mela, focusing on clarity, accessibility, and structured content delivery.",
      "Built the UI using **Bootstrap Studio**, leveraging responsive grid systems and prebuilt components to ensure consistent layout across devices.",
      "Designed and implemented **responsive sections** for event overview, highlights, and navigation, optimizing usability for both desktop and mobile users.",
      "Managed version control using **Git**, maintaining clean commit history and iterative improvements during development.",
      "Hosted the project using **GitHub Pages**, enabling seamless deployment of static assets directly from the repository.",
      "Ensured maintainability by organizing assets and components for easy updates and future scalability.",
      "Focused on fast load times and minimal dependencies by keeping the project lightweight and static.",
    ]
  }
]

export function Projects() {
  return (
    <section className="px-6 py-16 md:px-12 md:py-24 lg:px-24 lg:py-32">
      <div className="w-full">
        <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-12">
          Projects
        </h2>
        
        <Accordion type="single" collapsible className="w-full">
          {projects.map((project, index) => (
            <AccordionItem 
              key={index} 
              value={`project-${index}`} 
              className="border-b border-border/50 py-2 group overflow-hidden hover-bounce"
            >
              <AccordionTrigger 
                className="hover:no-underline py-8 transition-all duration-300 data-[state=open]:bg-muted/30 [&>svg]:hidden"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-baseline md:justify-between w-full text-left">
                  <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:gap-6">
                    <span className="text-2xl font-bold md:text-3xl lg:text-4xl tracking-tight">
                      {project.title}
                    </span>
                    <span className="hidden text-muted-foreground md:inline text-xl opacity-30">—</span>
                    <span className="text-lg text-muted-foreground md:text-xl font-medium">
                      {project.subtitle}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs md:text-sm font-bold uppercase tracking-widest bg-muted px-2 py-1 rounded text-muted-foreground/80 md:bg-transparent md:px-0 md:py-0">
                      {project.period}
                    </span>
                    {project.link && (
                      <Link 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 hover:bg-primary/10 rounded-full transition-colors"
                      >
                        {project.linkType === 'github' ? <Github className="h-5 w-5" /> : <Globe className="h-5 w-5" />}
                      </Link>
                    )}
                    <ChevronDown className="h-6 w-6 text-muted-foreground transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-6 pb-12 px-2 md:px-4">
                <ul className="grid grid-cols-1 gap-4 max-w-4xl">
                  {project.details.map((detail, idx) => {
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
