import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function About() {
  return (
    <section className="px-6 py-16 md:px-12 md:py-24 lg:px-24 lg:py-32">
      <div className="grid gap-16 lg:grid-cols-[1fr_auto] lg:items-start">
        <div>
          <h1 className="text-6xl font-medium tracking-tight md:text-7xl lg:text-8xl xl:text-9xl text-balance">
            S U TEJAS
          </h1>
          <p className="mt-4 text-lg font-medium uppercase tracking-widest text-muted-foreground md:text-xl">
            Assosiate Software Engineer (Flutter)
          </p>
          <p className="mt-8 text-base leading-relaxed text-muted-foreground md:text-lg max-w-xl">
            Currently crafting experiences at{" "}
            <span className="text-foreground font-medium">Melento</span> (2021 – Present)
          </p>
          <div className="mt-16 border-t border-border pt-8">
            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
              Think I'd be a good fit for your team or project?{" "}
              <Link
                href="mailto:tejas_s.u@yahoo.com"
                className="inline-flex items-center gap-1 text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground"
              >
                Let's connect
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </p>
          </div>
        </div>
        <div className="aspect-[3/4] w-full max-w-xs rounded-lg border border-border bg-neutral-100 dark:bg-neutral-800 lg:w-72 xl:w-80" />
      </div>
    </section>
  )
}
