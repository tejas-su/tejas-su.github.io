import { Header } from "@/components/header"
import { About } from "@/components/about"
import { BentoGrid } from "@/components/bento-grid"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Ventures } from "@/components/ventures"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "S U Tejas",
            url: "https://tejas-su.github.io",
            image: "https://tejas-su.github.io/icon.svg",
            sameAs: [
              "https://linkedin.com",
              "https://github.com/tejas-su",
              "https://dribbble.com/tejas-s-u",
              "https://www.instagram.com/tejas.s.u_/"
            ],
            jobTitle: "Associate Software Engineer",
            worksFor: {
              "@type": "Organization",
              name: "Melento"
            }
          })
        }}
      />
      <Header />
      <About />
      <BentoGrid />
      <Experience />
      <Projects />
      <Ventures />
      <Footer />
    </main>
  )
}
