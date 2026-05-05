import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import WhatIDo from '@/components/WhatIDo'
import Courses from '@/components/Courses'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <WhatIDo />
      <Courses />
      <Contact />
      <Footer />
    </main>
  )
}
