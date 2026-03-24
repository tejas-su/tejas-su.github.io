import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    company: "Crosby",
    project: "POS Tool Launch",
    href: "#",
  },
  {
    company: "Norman & Co",
    project: "Scout Product Launch",
    href: "#",
  },
  {
    company: "Gardona",
    project: "Online Store Redesign",
    href: "#",
  },
  {
    company: "Carmine",
    project: "Skycast App Launch",
    href: "#",
  },
  {
    company: "Freelance",
    project: "Mobile App Redesign",
    href: "#",
  },
  {
    company: "Personal",
    project: "Portfolio Website",
    href: "#",
  },
]

export function Experience() {
  return (
    <section className="px-6 py-16 md:px-12 md:py-24 lg:px-24 lg:py-32">
      <div className="max-w-5xl">
        <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Relevant Experience
        </h2>
        <div className="mt-8 divide-y divide-border">
          {projects.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="group flex items-center justify-between py-8 transition-colors hover:text-muted-foreground"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:gap-6">
                <span className="text-2xl font-medium md:text-3xl lg:text-4xl">
                  {item.company}
                </span>
                <span className="hidden text-muted-foreground md:inline text-xl">—</span>
                <span className="text-lg text-muted-foreground md:text-xl lg:text-2xl">
                  {item.project}
                </span>
              </div>
              <ArrowUpRight className="h-6 w-6 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
