import { Header } from "@/components/header"
import { About } from "@/components/about"
import { BentoGrid } from "@/components/bento-grid"
import { Experience } from "@/components/experience"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent">
      <Header />
      <About />
      <BentoGrid />
      <Experience />
      <Footer />
    </main>
  )
}
