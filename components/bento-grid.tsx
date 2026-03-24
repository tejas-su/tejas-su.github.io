export function BentoGrid() {
  return (
    <section className="px-6 py-16 md:px-12 md:py-24 lg:px-24 lg:py-32">
      <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-8">
        Selected Work
      </h2>
      
      {/* Mobile: stacked layout, Tablet+: bento grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[240px] sm:auto-rows-[200px] lg:auto-rows-[240px]">
        {/* Large featured image - spans 2 cols and 2 rows on larger screens */}
        <div className="sm:col-span-2 sm:row-span-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-border overflow-hidden group cursor-pointer transition-all hover:border-neutral-300 dark:hover:border-neutral-600">
          <div className="h-full w-full flex items-end p-6">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-sm font-medium">Project One</p>
              <p className="text-xs text-muted-foreground">UX Design</p>
            </div>
          </div>
        </div>

        {/* Medium image */}
        <div className="rounded-lg bg-neutral-200 dark:bg-neutral-700 border border-border overflow-hidden group cursor-pointer transition-all hover:border-neutral-300 dark:hover:border-neutral-600">
          <div className="h-full w-full flex items-end p-4">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-sm font-medium">Project Two</p>
              <p className="text-xs text-muted-foreground">Brand</p>
            </div>
          </div>
        </div>

        {/* Medium image */}
        <div className="rounded-lg bg-neutral-300 dark:bg-neutral-600 border border-border overflow-hidden group cursor-pointer transition-all hover:border-neutral-300 dark:hover:border-neutral-500">
          <div className="h-full w-full flex items-end p-4">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-sm font-medium">Project Three</p>
              <p className="text-xs text-muted-foreground">Visual Design</p>
            </div>
          </div>
        </div>

        {/* Tall image - spans 2 rows on larger screens */}
        <div className="sm:row-span-2 rounded-lg bg-neutral-400 dark:bg-neutral-500 border border-border overflow-hidden group cursor-pointer transition-all hover:border-neutral-300 dark:hover:border-neutral-400">
          <div className="h-full w-full flex items-end p-4">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-sm font-medium text-white">Project Four</p>
              <p className="text-xs text-white/70">Product</p>
            </div>
          </div>
        </div>

        {/* Wide image - spans 2 cols on larger screens */}
        <div className="sm:col-span-2 rounded-lg bg-neutral-200 dark:bg-neutral-700 border border-border overflow-hidden group cursor-pointer transition-all hover:border-neutral-300 dark:hover:border-neutral-600">
          <div className="h-full w-full flex items-end p-6">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-sm font-medium">Project Five</p>
              <p className="text-xs text-muted-foreground">Mobile App</p>
            </div>
          </div>
        </div>

        {/* Small image */}
        <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-border overflow-hidden group cursor-pointer transition-all hover:border-neutral-300 dark:hover:border-neutral-600">
          <div className="h-full w-full flex items-end p-4">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-sm font-medium">Project Six</p>
              <p className="text-xs text-muted-foreground">Web</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
