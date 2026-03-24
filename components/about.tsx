import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function About() {
  return (
    <section className="px-6 py-24 md:px-12 md:py-32 lg:px-24 flex flex-col items-center justify-center min-vh-80 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-12">
        <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tighter uppercase leading-[0.9] text-balance">
          Associate <br />
          Software <br />
          Engineer <br />
          (Flutter)<span className="inline-block align-top text-[0.4em] md:text-[0.3em] ml-2">©</span>
        </h1>

        <div className="w-full border-t border-border pt-6 mt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/60">
            <p className="whitespace-nowrap">Currently crafting experiences at Melento</p>
            <p className="whitespace-nowrap">(2021 — Present)</p>
          </div>
        </div>

        <Link
          href="mailto:tejas_s.u@yahoo.com"
          className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest underline underline-offset-4 transition-colors hover:text-muted-foreground"
        >
          Let's connect
          <ArrowUpRight className="h-3 w-3" />
        </Link>

        <div className="aspect-[3/4] w-full max-w-xs rounded-lg border border-border bg-neutral-100 dark:bg-neutral-800 mx-auto" />

      </div>
    </section>
  )
}
