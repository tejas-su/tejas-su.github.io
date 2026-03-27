import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "Cardamom Care",
    category: "AI & Agriculture",
    href: "https://github.com/tejas-su/cardamom_care/",
    image: "https://raw.githubusercontent.com/tejas-su/cardamom_care/main/assets/images/appLogoFY.jpg",
    colSpan: "sm:col-span-1 sm:row-span-1",
    textColor: "text-foreground",
    subColor: "text-muted-foreground",
  },
  {
    title: "Melento",
    category: "Flutter · Production App",
    href: "https://play.google.com/store/apps/details?id=com.melento.desknine.live",
    image: "https://play-lh.googleusercontent.com/b0lT5Dm0FBqPV5kLshR5yk2MwJ61und1bSb25cfOJNp0QaJHAtrRyhEvmdV5OJEXqSFlh9_ii8DBohs1Fp9Xnw=w480-h960-rw",
    colSpan: "sm:col-span-2 sm:row-span-2",
    textColor: "text-foreground",
    subColor: "text-muted-foreground",
  },
  {
    title: "Scribble",
    category: "Flutter · SQLite",
    href: "https://play.google.com/store/apps/details?id=com.widgetsandco.scribble",
    image: "https://play-lh.googleusercontent.com/FVCv6ieIowuuflvmSq10Tx8jNQLwG2J_3gkuxddkdfuay7ZoRn2XLBVE7soTaLJrhA=w480-h960-rw",
    colSpan: "sm:col-span-1 sm:row-span-2",
    textColor: "text-foreground",
    subColor: "text-muted-foreground",
  },
  {
    title: "Shrine",
    category: "Flutter · Supabase",
    href: "https://github.com/tejas-su/shrine_app",
    image: "https://raw.githubusercontent.com/tejas-su/project_management/main/assets/images/building.png",
    colSpan: "",
    textColor: "text-foreground",
    subColor: "text-muted-foreground",
  },
  {
    title: "Widgets & Co.",
    category: "Mobile · Play Store",
    href: "https://play.google.com/store/apps/developer?id=Widgets+%26+Co",
    image: "https://play-lh.googleusercontent.com/SIbYCw_4pqAkdOgbgvniSJ5kiQp8StGwh72MUrrIA6VKcuQ-P3ija11xS0zrFn89=s188-rw",
    colSpan: "",
    textColor: "text-foreground",
    subColor: "text-muted-foreground",
  },
  {
    title: "Krishi Yantra Mela",
    category: "Static Website",
    href: "https://krishiyantramela.github.io/index.html",
    image: "https://krishiyantramela.github.io/assets/img/Body/Hero%20copy.png",
    colSpan: "sm:col-span-3 sm:row-span-1",
    textColor: "text-white",
    subColor: "text-white/70",
  },

]

const bgColors = [
  "bg-white",
  "bg-white",
  "bg-white",
  "bg-white",
  "bg-white",
  "bg-white",
]

export function BentoGrid() {
  return (
    <section className="px-6 py-16 md:px-12 md:py-24 lg:px-24 lg:py-32">
      <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-8">
        Selected Work
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[240px] sm:auto-rows-[200px] lg:auto-rows-[240px]">
        {projects.map((project, index) => (
          <Link
            key={project.title}
            href={project.href}
            target={project.href !== "#" ? "_blank" : undefined}
            rel={project.href !== "#" ? "noopener noreferrer" : undefined}
            className={`${project.colSpan} rounded-lg ${bgColors[index]} border border-border overflow-hidden group cursor-pointer transition-all hover:border-neutral-400 dark:hover:border-neutral-500 relative`}
          >
            {project.image && (
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="relative w-full h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
            )}
            <div className="absolute inset-0 flex items-end p-4 md:p-6 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div>
                <p className="text-sm font-semibold text-white drop-shadow-md">{project.title}</p>
                <p className="text-xs text-white/80 drop-shadow-sm">{project.category}</p>
              </div>
            </div>
            <div className="absolute inset-0 flex items-end p-4 md:p-6 group-hover:opacity-0 transition-opacity duration-300">
              <div className="opacity-60">
                <p className="text-xs font-bold uppercase tracking-widest text-neutral-900">{project.category}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
