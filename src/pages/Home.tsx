import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "react-router-dom"
import heroImage from "@/assets/hero.jpeg"
import { cn } from "@/lib/utils"
import { BadgeCheck, Brain, Code2, Cpu, Lock, Share2 } from "lucide-react"

const LOGOS = [
  {
    src: "/logos/microsoft.svg",
    alt: "Microsoft"
  },
  {
    src: "/logos/mongodb.svg",
    alt: "MongoDB"
  },
  {
    src: "/logos/google.svg",
    alt: "Google"
  },
  {
    src: "/logos/amazon.svg",
    alt: "Amazon"
  },
  {
    src: "/logos/meta.svg",
    alt: "Meta"
  }
];

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-[1280px] h-[720px] mx-auto flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src={heroImage}
            alt="Hero background" 
            className="w-[1280px] h-[720px] object-contain"
            width={1280}
            height={720}
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <Card className="rounded-2xl backdrop-blur-sm inline-block p-8">
            <h1 className="text-6xl font-bold tracking-tight mb-6">
              Welcome to <span className="text-primary">AILENS</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
              Transforming businesses through innovative AI solutions and cutting-edge technology
            </p>
          </Card>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-gradient-to-b from-black to-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-white">Our Unique Methodology</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              We believe in understanding the 'why' before implementing the 'how' and 'what'
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-black/50 border-primary/20">
              <CardHeader className="border-b-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl font-bold">1</span>
                </div>
                <CardTitle className="text-white">Understanding Why</CardTitle>
                <CardDescription className="text-slate-400">
                  We start by deeply understanding the core problem and its significance. This ensures our solutions address real needs rather than superficial symptoms.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-black/50 border-primary/20">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl font-bold">2</span>
                </div>
                <CardTitle className="text-white">Empathy-Driven Approach</CardTitle>
                <CardDescription className="text-slate-400">
                  Our solutions are built with deep empathy for end-users, ensuring that every feature serves a meaningful purpose in their journey.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-black/50 border-primary/20">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl font-bold">3</span>
                </div>
                <CardTitle className="text-white">Focused Implementation</CardTitle>
                <CardDescription className="text-slate-400">
                  We implement solutions that are not just technologically advanced but are meaningful, accessible, and practical for our users.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Logo Slider */}
      <Card className="border-none bg-black py-16 shadow-none">
        <div className="container mx-auto px-4 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-white">Trusted by Industry Leaders</h2>
            <p className="text-slate-400">
              Join thousands of companies already using our platform
            </p>
          </div>
          
          <div className="relative mx-auto overflow-hidden bg-[#0A0A0A]"
               style={{ 
                 width: 'calc(var(--logo-width) * var(--visible-logos) + var(--logo-gap) * (var(--visible-logos) - 1))',
                 height: '2rem'
               }}>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0A0A0A] z-10"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0A0A0A] z-10"></div>
            
            <div className={cn(
              "flex animate-scroll-contained h-full items-center",
            //   "hover:[animation-play-state:paused]",
              "[--logo-width:150px]",
              "[--logo-height:100rem]",
              "[--logo-gap:4rem]",
              "[--visible-logos:20]",
              "[--total-logos:10]"
            )}>
              {LOGOS.map((logo, i) => (
                <div 
                  key={i} 
                  className="flex items-center justify-center shrink-0 h-full"
                  style={{ width: 'var(--logo-width)' }}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className={cn(
                      "h-full w-auto object-contain brightness-150 transition-all duration-300",
                      "hover:brightness-200 hover:scale-110"
                    )}
                  />
                </div>
              ))}
              {LOGOS.map((logo, i) => (
                <div 
                  key={`duplicate-${i}`} 
                  className="flex items-center justify-center shrink-0 h-full"
                  style={{ width: 'var(--logo-width)' }}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className={cn(
                      "h-full w-auto object-contain brightness-150 transition-all duration-300",
                      "hover:brightness-200 hover:scale-110"
                    )}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="hover:border-primary/50 transition-colors">
            <CardHeader>
              <CardTitle>AI Solutions</CardTitle>
              <CardDescription>
                Cutting-edge artificial intelligence solutions tailored to your business needs
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:border-primary/50 transition-colors">
            <CardHeader>
              <CardTitle>Data Analytics</CardTitle>
              <CardDescription>
                Transform your data into actionable insights with our advanced analytics
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:border-primary/50 transition-colors">
            <CardHeader>
              <CardTitle>Machine Learning</CardTitle>
              <CardDescription>
                Leverage the power of machine learning to automate and optimize processes
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  )
} 