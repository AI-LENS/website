import emblem1 from "@/assets/emblem1.png"
import aboutimg from "@/assets/abouttimg.jpg"
import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <div className="py-8 mb-16 bg-gradient-to-b from-black to-[#0A0A0A]">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="flex flex-col items-center mb-16 text-center">
          <img 
            src={emblem1} 
            alt="AILENS Emblem" 
            className="h-40 w-auto mb-8"
          />
          <h1 className="text-4xl font-bold mb-6 text-white">About Us</h1>
          <p className="text-lg text-slate-400 max-w-3xl">
            AI Lens Pvt. Ltd. is a pioneering force in the realm of Generative AI and business analytics, 
            dedicated to solving complex business challenges across diverse industries. Founded with a mission 
            to empower organizations through advanced AI technologies, we specialize in leveraging Large 
            Language Models (LLMs) to drive innovation and deliver transformative results in multiple sectors.
          </p>
        </div>

        {/* Expertise Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-white">Our Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="prose dark:prose-invert">
              <p className="text-slate-400">
                At AI Lens, we harness the power of Generative AI, specifically utilizing Large Language Models, 
                to address a wide array of business problems. Our AI solutions are designed to simulate human-like 
                reasoning and creativity, enabling businesses to innovate and optimize operations across multiple domains.
              </p>
              <p className="text-slate-400">
                Beyond Generative AI, we offer comprehensive end-to-end business analytics services that encompass 
                data collection, integration, advanced analysis, and insightful visualizations. Our goal is to equip 
                businesses with the insights they need to make data-driven decisions that enhance efficiency, reduce 
                costs, and improve overall performance.
              </p>
            </div>
            <div className="rounded-lg bg-black/50 p-6">
              <img 
                src={aboutimg} 
                alt="AI Expertise" 
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-black/50 border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-white">Our Mission</h3>
                <p className="text-slate-400">
                  Our mission is to harness the power of AI and data to create substantial value for our clients. 
                  We believe in the transformative potential of AI across all industries and are committed to 
                  delivering solutions that drive success and sustainability.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-black/50 border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-white">Our Vision</h3>
                <p className="text-slate-400">
                  To be recognized as a global leader in AI and analytics, driving innovation and excellence 
                  across industries. We aim to enable businesses of all sizes to harness the power of AI, 
                  ensuring they achieve new heights of success and sustainability.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-white">Why Choose Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-black/50 border-primary/20">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-3 text-white">Advanced AI Solutions</h4>
                <p className="text-slate-400">
                  We leverage state-of-the-art Large Language Models to deliver AI solutions that address 
                  complex business challenges across multiple sectors.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-black/50 border-primary/20">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-3 text-white">Comprehensive Analytics</h4>
                <p className="text-slate-400">
                  Our end-to-end business analytics services ensure you have the critical insights needed 
                  to make informed decisions.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-black/50 border-primary/20">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-3 text-white">Customized Approach</h4>
                <p className="text-slate-400">
                  We tailor our services to the specific needs of each client, ensuring alignment with 
                  your business objectives and goals.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-black/50 border-primary/20">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-3 text-white">Proven Expertise</h4>
                <p className="text-slate-400">
                  With a team of seasoned professionals in AI, data science, and business analytics, 
                  we bring unparalleled expertise to every project.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-white">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Innovation", "Integrity", "Collaboration", "Excellence"].map((value) => (
              <Card key={value} className="bg-black/50 border-primary/20">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-3 text-white">{value}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-white">Join Us on Our Journey</h2>
          <p className="text-lg text-slate-400">
            At AI Lens Pvt. Ltd., we are more than just a technology provider; we are your strategic 
            partner in navigating the complexities of the digital age. Whether you're looking to innovate 
            within your industry or gain deeper insights into your business through analytics, we're here to help.
          </p>
        </section>
      </div>
    </div>
  )
} 