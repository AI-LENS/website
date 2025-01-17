import {Card,CardContent,CardDescription,CardHeader,CardTitle} from "@/components/ui/card";
import { Link } from "react-router-dom";
// import heroImage from "@/assets/hero.jpeg";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio"
import narayana from "@/assets/logos/Narayana.png";
import fluidly from "@/assets/logos/fluidly.webp";
import specsgenie from "@/assets/logos/SpecsGenie.png";
import dataanalytics from "@/assets/blogs/dataanalytics.jpeg";
import machinelearning from "@/assets/blogs/machinelearning.jpeg";
import futureai from "@/assets/blogs/futureai.jpeg";
import { HeroSection } from "@/components/HeroSection";

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
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl font-bold tracking-tight text-white">
                Our Unique Methodology
              </h2>
              <p className="text-slate-200 text-lg max-w-2xl mx-auto">
                We believe in understanding the 'why' before implementing the
                'how' and 'what'
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card
                className="bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border-blue-500/20 transition-all duration-300 
                hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:shadow-blue-500/30 
                hover:scale-105 hover:border-blue-400/40 shadow-lg 
                before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-br 
                before:from-blue-500/5 before:to-white/5 before:blur-xl before:transition-all before:duration-300
                hover:before:from-blue-500/10 hover:before:to-white/10 relative overflow-hidden"
              >
                <CardHeader className="border-b-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-primary text-2xl font-bold">1</span>
                  </div>
                  <CardTitle className="text-white">Understanding Why</CardTitle>
                  <CardDescription className="text-slate-400">
                    We start by deeply understanding the core problem and its
                    significance. This ensures our solutions address real needs
                    rather than superficial symptoms.
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
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-primary text-2xl font-bold">2</span>
                  </div>
                  <CardTitle className="text-white">
                    Empathy-Driven Approach
                  </CardTitle>
                  <CardDescription className="text-slate-400">
                    Our solutions are built with deep empathy for end-users,
                    ensuring that every feature serves a meaningful purpose in
                    their journey.
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
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-primary text-2xl font-bold">3</span>
                  </div>
                  <CardTitle className="text-white">
                    Focused Implementation
                  </CardTitle>
                  <CardDescription className="text-slate-400">
                    We implement solutions that are not just technologically
                    advanced but are meaningful, accessible, and practical for our
                    users.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* BlogCorner Section */}
        <section className="py-15">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl font-bold tracking-tight text-white">
                Blog Corner
              </h2>
              <p className="text-slate-200 text-lg max-w-2xl mx-auto">
                Explore our latest insights and discoveries in AI and technology
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column - Large Tile */}
              <Link to="/blog">
                <Card className="bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border-blue-500/20 transition-all duration-300 
                  hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:shadow-blue-500/30 
                  hover:scale-105 hover:border-blue-400/40 shadow-lg 
                  before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-br 
                  before:from-blue-500/5 before:to-white/5 before:blur-xl before:transition-all before:duration-300
                  hover:before:from-blue-500/10 hover:before:to-white/10 relative overflow-hidden rounded-none"
                >
                  <CardContent className="p-0 relative h-[515px]">
                    <img 
                      src={futureai} 
                      alt="The Future of AI" 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/60 backdrop-blur-sm h-[25%]">
                      <h3 className="text-2xl font-bold text-white mb-1">The Future of AI</h3>
                      <p className="text-slate-300 text-sm">Exploring the upcoming trends and innovations in artificial intelligence that will shape our tomorrow. Discover how AI is revolutionizing industries and creating new opportunities for growth and innovation.</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              {/* Right Column - Two Stacked Tiles */}
              <div className="flex flex-col gap-4">
                <Link to="/blog">
                  <Card className="bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border-blue-500/20 transition-all duration-300 
                    hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:shadow-blue-500/30 
                    hover:scale-105 hover:border-blue-400/40 shadow-lg 
                    before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-br 
                    before:from-blue-500/5 before:to-white/5 before:blur-xl before:transition-all before:duration-300
                    hover:before:from-blue-500/10 hover:before:to-white/10 relative overflow-hidden rounded-none"
                  >
                    <CardContent className="p-0 relative h-[250px]">
                      <img 
                        src={machinelearning} 
                        alt="Machine Learning Basics" 
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/60 backdrop-blur-sm h-[25%]">
                        <h3 className="text-xl font-bold text-white mb-1">Machine Learning Basics</h3>
                        <p className="text-slate-300 text-sm">A comprehensive guide to understanding the fundamentals of machine learning algorithms.</p>
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
                    <CardContent className="p-0 relative h-[250px]">
                      <img 
                        src={dataanalytics} 
                        alt="Data Analytics Impact" 
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/60 backdrop-blur-sm h-[25%]">
                        <h3 className="text-xl font-bold text-white mb-1">Data Analytics Impact</h3>
                        <p className="text-slate-300 text-sm">How data analytics is revolutionizing business decision-making in the modern era.</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <div className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-3 gap-8">
            <Card
              className="bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border-blue-500/20 transition-all duration-300 
              hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:shadow-blue-500/30 
              hover:scale-105 hover:border-blue-400/40 shadow-lg 
              before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-br 
              before:from-blue-500/5 before:to-white/5 before:blur-xl before:transition-all before:duration-300
              hover:before:from-blue-500/10 hover:before:to-white/10 relative overflow-hidden"
            >
              <CardHeader>
                <CardTitle>AI Solutions</CardTitle>
                <CardDescription>
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
        <section className="py-20">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white relative inline-block">
              Our Values
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/0 via-blue-500 to-blue-500/0 
                transform scale-x-100 transition-transform duration-300"></span>
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Guiding principles that drive our innovation and excellence
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card
              className="bg-gradient-to-br from-white to-white/90 border-blue-200 transition-all duration-300 
              hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:shadow-blue-500/30 
              hover:scale-105 hover:border-blue-400/40 shadow-lg group
              before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-br 
              before:from-blue-100/50 before:to-white/5 before:blur-xl before:transition-all before:duration-300
              hover:before:from-blue-200/50 hover:before:to-white/10 relative overflow-hidden"
            >
              <CardContent className="p-6 flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center 
                  group-hover:bg-blue-200 transition-colors duration-300">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-blue-950">Innovation</h4>
                  <p className="text-slate-700">
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
              <CardContent className="p-6 flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center 
                  group-hover:bg-blue-200 transition-colors duration-300">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-blue-950">Integrity</h4>
                  <p className="text-slate-700">
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
              <CardContent className="p-6 flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center 
                  group-hover:bg-blue-200 transition-colors duration-300">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-blue-950">Collaboration</h4>
                  <p className="text-slate-700">
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
              <CardContent className="p-6 flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center 
                  group-hover:bg-blue-200 transition-colors duration-300">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-blue-950">Excellence</h4>
                  <p className="text-slate-700">
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
