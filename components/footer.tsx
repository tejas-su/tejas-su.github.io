import Link from "next/link"

export function Footer() {
  return (
    <footer className="px-6 py-16 md:px-12 md:py-24 lg:px-24">
      <div className="border-t border-border pt-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              Designed & built from the desk of{" "}
              <span className="text-foreground">Devanta Ebison</span>
            </p>
            <p className="text-sm text-muted-foreground">
              Olio Portfolio Template – 2025
            </p>
          </div>
          <div>
            <Link
              href="https://framer.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Create a free website with Framer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
