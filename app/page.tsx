import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import WhatIDo from '@/components/WhatIDo'
import Courses from '@/components/Courses'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <WhatIDo />
      <Courses />
      <Footer />
    </main>
  )
}
