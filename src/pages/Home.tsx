import React from "react";
import {Card,CardContent,CardDescription,CardHeader,CardTitle} from "../components/ui/card";
import { Link } from "react-router-dom";
// import heroImage from "@/assets/hero.jpeg";
import { cn } from "../lib/utils";
import { AspectRatio } from "../components/ui/aspect-ratio"
import narayana from "../assets/logos/Narayana.png";
import fluidly from "../assets/logos/fluidly.webp";
import specsgenie from "../assets/logos/SpecsGenie.png";
import dataanalytics from "../assets/blogs/dataanalytics.jpeg";
import machinelearning from "../assets/blogs/machinelearning.jpeg";
import futureai from "../assets/blogs/futureai.jpeg";
import { HeroSection } from "../components/HeroSection";

const LOGOS = [
  {
    src:narayana,
  },
  {
    src:fluidly,
  },
  {
    src:specsgenie,
  },
  {
    src:narayana,
  },
  {
    src:fluidly,
  },
  {
    src:specsgenie,
  },
  {
    src:narayana,
  },
  {
    src:fluidly,
  },
  {
    src:specsgenie,
  },
];

export function Home() {
  return (
    <div className="bg-black">
  
      {/* Hero Section */}
      <section className="relative h-screen w-full mx-auto">
        <HeroSection />
      </section>

      {/* Rest of the sections with black background */}
      <div className="bg-black">
        {/* Methodology Section */}
        <section className="py-24 relative overflow-hidden">
          {/* Enhanced background with animated elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzQjgyRjYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
          </div>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-[5%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px] animate-pulse" style={{animationDuration: '8s'}}></div>
            <div className="absolute top-[60%] -right-[5%] w-[35%] h-[40%] rounded-full bg-blue-600/10 blur-[120px] animate-pulse" style={{animationDuration: '12s'}}></div>
          </div>
          
          <div className="container mx-auto px-4 max-w-[1600px] relative z-10">
            <div className="text-center space-y-6 mb-16">
              <div className="inline-block">
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white relative inline-block">
                  Our Unique Methodology
                </h2>
                <div className="h-1.5 w-3/4 mx-auto mt-4 bg-gradient-to-r from-blue-500/0 via-blue-500 to-blue-500/0 rounded-full"></div>
              </div>
              <p className="text-slate-200 text-xl max-w-3xl mx-auto mt-6">
                We believe in understanding the 'why' before implementing the
                'how' and 'what'
              </p>
            </div>

            {/* Restructured cards with timeline-like appearance */}
            <div className="relative">
              {/* Timeline line (visible on md and up) */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0 transform -translate-x-1/2"></div>
              
              <div className="space-y-8 md:space-y-12 relative">
                {/* Card 1 - Left aligned on md+ */}
                <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
                  <div className="md:text-right">
                    <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-blue-500/20 rounded-lg p-6 transition-all duration-500 
                      hover:border-blue-400/50 shadow-lg relative overflow-hidden group">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 transform origin-right scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></div>
                      <div className="flex flex-col md:items-end">
                        <h3 className="text-white text-2xl font-bold mb-3 group-hover:text-blue-200 transition-colors duration-300">Understanding Why</h3>
                        <p className="text-slate-400 text-lg group-hover:text-slate-300 transition-colors duration-300">
                          We start by deeply understanding the core problem and its
                          significance. This ensures our solutions address real needs
                          rather than superficial symptoms.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Circle connector (visible on md and up) */}
                  <div className="hidden md:flex justify-start">
                    <div className="w-5 h-5 rounded-full bg-blue-500 border-4 border-zinc-900 relative -ml-2.5 z-10"></div>
                  </div>
                </div>
                
                {/* Card 2 - Right aligned on md+ */}
                <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
                  {/* Circle connector (visible on md and up) */}
                  <div className="hidden md:flex justify-end">
                    <div className="w-5 h-5 rounded-full bg-blue-500 border-4 border-zinc-900 relative -mr-2.5 z-10"></div>
                  </div>
                  
                  <div>
                    <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-blue-500/20 rounded-lg p-6 transition-all duration-500 
                      hover:border-blue-400/50 shadow-lg relative overflow-hidden group">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-700 transform origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></div>
                      <div className="flex flex-col">
                        <h3 className="text-white text-2xl font-bold mb-3 group-hover:text-blue-200 transition-colors duration-300">Empathy-Driven Approach</h3>
                        <p className="text-slate-400 text-lg group-hover:text-slate-300 transition-colors duration-300">
                          Our solutions are built with deep empathy for end-users,
                          ensuring that every feature serves a meaningful purpose in
                          their journey.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Card 3 - Left aligned on md+ */}
                <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
                  <div className="md:text-right">
                    <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-blue-500/20 rounded-lg p-6 transition-all duration-500 
                      hover:border-blue-400/50 shadow-lg relative overflow-hidden group">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-300 to-blue-500 transform origin-right scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></div>
                      <div className="flex flex-col md:items-end">
                        <h3 className="text-white text-2xl font-bold mb-3 group-hover:text-blue-200 transition-colors duration-300">Focused Implementation</h3>
                        <p className="text-slate-400 text-lg group-hover:text-slate-300 transition-colors duration-300">
                          We implement solutions that are not just technologically
                          advanced but are meaningful, accessible, and practical for our
                          users.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Circle connector (visible on md and up) */}
                  <div className="hidden md:flex justify-start">
                    <div className="w-5 h-5 rounded-full bg-blue-500 border-4 border-zinc-900 relative -ml-2.5 z-10"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BlogCorner Section */}
        <section className="py-20">
          <div className="container mx-auto px-0.5 md:px-1 lg:px-1.5 max-w-[1600px]">
            <div className="text-center space-y-6 mb-20">
              <h2 className="text-5xl font-bold tracking-tight text-white">
                Blog Corner
              </h2>
              <p className="text-slate-200 text-xl max-w-3xl mx-auto">
                Explore our latest insights and discoveries in AI and technology
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
              {/* Left Column - Large Tile */}
              <Link to="/blog">
                <Card className="bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border-blue-500/20 transition-all duration-300 
                  hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:shadow-blue-500/30 
                  hover:scale-105 hover:border-blue-400/40 shadow-lg 
                  before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-br 
                  before:from-blue-500/5 before:to-white/5 before:blur-xl before:transition-all before:duration-300
                  hover:before:from-blue-500/10 hover:before:to-white/10 relative overflow-hidden rounded-none"
                >
                  <CardContent className="p-0 relative h-[640px]">
                    <img 
                      src={futureai} 
                      alt="The Future of AI" 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/60 backdrop-blur-sm h-[25%]">
                      <h3 className="text-3xl font-bold text-white mb-2">The Future of AI</h3>
                      <p className="text-slate-300 text-base">Exploring the upcoming trends and innovations in artificial intelligence that will shape our tomorrow. Discover how AI is revolutionizing industries and creating new opportunities for growth and innovation.</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              {/* Right Column - Two Stacked Tiles */}
              <div className="flex flex-col gap-6">
                <Link to="/blog">
                  <Card className="bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border-blue-500/20 transition-all duration-300 
                    hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:shadow-blue-500/30 
                    hover:scale-105 hover:border-blue-400/40 shadow-lg 
                    before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-br 
                    before:from-blue-500/5 before:to-white/5 before:blur-xl before:transition-all before:duration-300
                    hover:before:from-blue-500/10 hover:before:to-white/10 relative overflow-hidden rounded-none"
                  >
                    <CardContent className="p-0 relative h-[310px]">
                      <img 
                        src={machinelearning} 
                        alt="Machine Learning Basics" 
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/60 backdrop-blur-sm h-[25%]">
                        <h3 className="text-2xl font-bold text-white mb-1">Machine Learning Basics</h3>
                        <p className="text-slate-300 text-base">A comprehensive guide to understanding the fundamentals of machine learning algorithms.</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>

                <Link to="/blog">
                  <Card className="bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border-blue-500/20 transition-all duration-300 
                    hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:shadow-blue-500/30 
                    hover:scale-105 hover:border-blue-400/40 shadow-lg 
                    before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-br 
                    before:from-blue-500/5 before:to-white/5 before:blur-xl before:transition-all before:duration-300
                    hover:before:from-blue-500/10 hover:before:to-white/10 relative overflow-hidden rounded-none"
                  >
                    <CardContent className="p-0 relative h-[310px]">
                      <img 
                        src={dataanalytics} 
                        alt="Data Analytics Impact" 
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/60 backdrop-blur-sm h-[25%]">
                        <h3 className="text-2xl font-bold text-white mb-1">Data Analytics Impact</h3>
                        <p className="text-slate-300 text-base">How data analytics is revolutionizing business decision-making in the modern era.</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <div className="container mx-auto px-0.5 md:px-1 lg:px-1.5 max-w-[1600px] py-24">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            <Card
              className="bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border-blue-500/20 transition-all duration-300 
              hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:shadow-blue-500/30 
              hover:scale-105 hover:border-blue-400/40 shadow-lg 
              before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-br 
              before:from-blue-500/5 before:to-white/5 before:blur-xl before:transition-all before:duration-300
              hover:before:from-blue-500/10 hover:before:to-white/10 relative overflow-hidden"
            >
              <CardHeader>
                <CardTitle className="text-2xl">AI Solutions</CardTitle>
                <CardDescription className="text-lg">
                  Cutting-edge artificial intelligence solutions tailored to your
                  business needs
                </CardDescription>
              </CardHeader>
            </Card>

            <Card
              className="bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border-blue-500/20 transition-all duration-300 
              hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:shadow-blue-500/30 
              hover:scale-105 hover:border-blue-400/40 shadow-lg 
              before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-br 
              before:from-blue-500/5 before:to-white/5 before:blur-xl before:transition-all before:duration-300
              hover:before:from-blue-500/10 hover:before:to-white/10 relative overflow-hidden"
            >
              <CardHeader>
                <CardTitle>Data Analytics</CardTitle>
                <CardDescription>
                  Transform your data into actionable insights with our advanced
                  analytics
                </CardDescription>
              </CardHeader>
            </Card>

            <Card
              className="bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border-blue-500/20 transition-all duration-300 
              hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:shadow-blue-500/30 
              hover:scale-105 hover:border-blue-400/40 shadow-lg 
              before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-br 
              before:from-blue-500/5 before:to-white/5 before:blur-xl before:transition-all before:duration-300
              hover:before:from-blue-500/10 hover:before:to-white/10 relative overflow-hidden"
            >
              <CardHeader>
                <CardTitle>Machine Learning</CardTitle>
                <CardDescription>
                  Leverage the power of machine learning to automate and optimize
                  processes
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Values Section */}
        <section className="py-24">
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white relative inline-block">
              Our Values
              <span className="absolute -bottom-3 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500/0 via-blue-500 to-blue-500/0 
                transform scale-x-100 transition-transform duration-300"></span>
            </h2>
            <p className="text-slate-300 text-xl max-w-3xl mx-auto">
              Guiding principles that drive our innovation and excellence
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-[1600px] mx-auto px-0.5 md:px-1 lg:px-1.5">
            <Card
              className="bg-gradient-to-br from-white to-white/90 border-blue-200 transition-all duration-300 
              hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:shadow-blue-500/30 
              hover:scale-105 hover:border-blue-400/40 shadow-lg group
              before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-br 
              before:from-blue-100/50 before:to-white/5 before:blur-xl before:transition-all before:duration-300
              hover:before:from-blue-200/50 hover:before:to-white/10 relative overflow-hidden"
            >
              <CardContent className="p-8 flex items-center gap-8">
                <div className="w-20 h-20 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center 
                  group-hover:bg-blue-200 transition-colors duration-300">
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-3 text-blue-950">Innovation</h4>
                  <p className="text-slate-700 text-lg">
                    We are committed to continuous learning and development,
                    constantly pushing the boundaries of what AI can achieve.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card
              className="bg-gradient-to-br from-white to-white/90 border-blue-200 transition-all duration-300 
              hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:shadow-blue-500/30 
              hover:scale-105 hover:border-blue-400/40 shadow-lg group
              before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-br 
              before:from-blue-100/50 before:to-white/5 before:blur-xl before:transition-all before:duration-300
              hover:before:from-blue-200/50 hover:before:to-white/10 relative overflow-hidden"
            >
              <CardContent className="p-8 flex items-center gap-8">
                <div className="w-20 h-20 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center 
                  group-hover:bg-blue-200 transition-colors duration-300">
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-3 text-blue-950">Integrity</h4>
                  <p className="text-slate-700 text-lg">
                    We operate with the highest ethical standards, fostering
                    transparency and trust in all our interactions.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card
              className="bg-gradient-to-br from-white to-white/90 border-blue-200 transition-all duration-300 
              hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:shadow-blue-500/30 
              hover:scale-105 hover:border-blue-400/40 shadow-lg group
              before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-br 
              before:from-blue-100/50 before:to-white/5 before:blur-xl before:transition-all before:duration-300
              hover:before:from-blue-200/50 hover:before:to-white/10 relative overflow-hidden"
            >
              <CardContent className="p-8 flex items-center gap-8">
                <div className="w-20 h-20 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center 
                  group-hover:bg-blue-200 transition-colors duration-300">
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-3 text-blue-950">Collaboration</h4>
                  <p className="text-slate-700 text-lg">
                    We believe in the power of teamwork, both within our company and
                    with our clients, to deliver exceptional results.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card
              className="bg-gradient-to-br from-white to-white/90 border-blue-200 transition-all duration-300 
              hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:shadow-blue-500/30 
              hover:scale-105 hover:border-blue-400/40 shadow-lg group
              before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-br 
              before:from-blue-100/50 before:to-white/5 before:blur-xl before:transition-all before:duration-300
              hover:before:from-blue-200/50 hover:before:to-white/10 relative overflow-hidden"
            >
              <CardContent className="p-8 flex items-center gap-8">
                <div className="w-20 h-20 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center 
                  group-hover:bg-blue-200 transition-colors duration-300">
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-3 text-blue-950">Excellence</h4>
                  <p className="text-slate-700 text-lg">
                    We strive for excellence in all that we do, providing solutions
                    that not only meet but exceed client expectations.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Customer Logo Slider */}
        <section className="py-15">
          <Card className="border-none bg-black py-16 shadow-lg">
            <div className="container mx-auto px-4 space-y-8">
              <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold tracking-tight text-white">
                  Trusted by Industry Leaders
                </h2>
                <p className="text-slate-400">
                  Join thousands of companies already using our platform
                </p>
              </div>

              <div
                className="relative mx-auto overflow-hidden bg-black"
                style={{
                  width:
                    "calc(var(--logo-width) * var(--visible-logos) + var(--logo-gap) * (var(--visible-logos) - 1))",
                  height: "3rem",
                }}
              >
                {/* Left gradient with enhanced glow */}
                <div
                  className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black z-10 
      before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/30 before:to-transparent before:blur-2xl"
                ></div>

                {/* Right gradient with enhanced glow */}
                <div
                  className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black z-10
      before:absolute before:inset-0 before:bg-gradient-to-l before:from-white/30 before:to-transparent before:blur-2xl"
                ></div>

                <div className="inline-flex">
                  <div
                    className={cn(
                      "flex animate-scroll-loop h-full items-center",
                      "hover:[animation-play-state:paused]",
                      "[--logo-width:225px]",
                      "[--logo-height:150rem]",
                      "[--logo-gap:4rem]",
                      "[--visible-logos:6]",
                      "[--total-logos:3]"
                    )}
                  >
                    {/* First set of logos */}
                    {LOGOS.map((logo, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-center shrink-0 h-full"
                        style={{ width: "var(--logo-width)" }}
                      >
                        <img
                          src={logo.src}
                          alt={logo.alt}
                          className={cn(
                            "h-full w-auto object-contain brightness-150 transition-all duration-300",
                            "hover:scale-110"
                          )}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
