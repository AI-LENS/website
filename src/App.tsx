import React from "react"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { Navbar } from "@/components/Navbar"
import { Home } from "@/pages/Home"
import { About } from "@/pages/About"
import { Expertise } from "@/pages/Expertise"
import { Offerings } from "@/pages/Offerings"
import { Careers } from "@/pages/Careers"
import { Contact } from "@/pages/Contact"
import { useEffect } from "react"
import { Footer } from "@/components/Footer"
import { baseUrl } from "@/config"

// ScrollToTop component
export function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    })
  }, [pathname])

  return null
}

function App() {
  useEffect(() => {
    // Force dark mode
    document.documentElement.classList.add('dark')
  }, [])

  return (
    <Router basename={baseUrl}>
      <ScrollToTop />
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="pt-16 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/offerings" element={<Offerings />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
