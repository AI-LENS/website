import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import logo1 from "@/assets/logo1.png"
import favicon from "@/assets/favicon.png"
import emblem1 from "@/assets/emblem1.png"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-zinc-900/90 to-zinc-950/90 mt-auto relative
      before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-b 
      before:from-blue-500/5 before:to-white/5 before:blur-xl before:transition-all
      font-[-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,'Helvetica_Neue',Arial,sans-serif]">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <Card className="bg-transparent border-none shadow-none">
            <CardContent className="p-0">
              <div className="mb-4 space-y-4">
                <div className="flex items-center gap-4">
                  <img 
                    src={logo1} 
                    alt="AILENS Logo" 
                    className="h-12 w-auto"
                  />
                  <img 
                    src={emblem1} 
                    alt="AILENS Emblem" 
                    className="h-10 w-auto"
                  />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  AI Lens Pvt. Ltd. is a pioneering force in the realm of Generative AI and business analytics, 
                  dedicated to solving complex business challenges across diverse industries.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Our Offerings */}
          <Card className="bg-transparent border-none shadow-none hover:bg-zinc-800/20 transition-colors duration-300">
            <CardContent className="p-0">
              <h3 className="text-lg font-semibold text-foreground mb-4">Our Offerings</h3>
              <ul className="text-muted-foreground text-sm space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Business Intelligence</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Data Engineering</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Data Science</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Generative AI</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card className="bg-transparent border-none shadow-none hover:bg-zinc-800/20 transition-colors duration-300">
            <CardContent className="p-0">
              <h3 className="text-lg font-semibold text-foreground mb-4">Contact Info</h3>
              <div className="text-muted-foreground text-sm space-y-4">
                <p className="flex items-center gap-3 hover:text-primary transition-colors">
                  <FaMapMarkerAlt className="h-4 w-4 text-primary" />
                  <span>Hyderabad, India</span>
                </p>
                <p className="flex items-center gap-3 hover:text-primary transition-colors">
                  <FaEnvelope className="h-4 w-4 text-primary" />
                  <a href="mailto:info@ailens.ai">info@ailens.ai</a>
                </p>
                <p className="flex items-center gap-3 hover:text-primary transition-colors">
                  <FaPhone className="h-4 w-4 text-primary" />
                  <a href="tel:+919951242242">+91 9951 24 2242</a>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Newsletter */}
          <Card className="bg-transparent border-none shadow-none">
            <CardContent className="p-0">
              <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
              <div className="flex flex-col gap-3">
                <Input
                  type="email"
                  placeholder="Enter Email Address"
                  className="bg-zinc-800/50 border-blue-500/20 focus:border-blue-400/40 transition-colors"
                />
                <Button className="w-full bg-blue-500/80 hover:bg-blue-400 transition-colors">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* <Separator className="my-8 bg-blue-500/20" /> */}

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="hover:text-blue-400 hover:bg-blue-500/10 transition-colors"
          >
            <a
              href="https://github.com/ailens-ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="hover:text-blue-400 hover:bg-blue-500/10 transition-colors"
          >
            <a
              href="https://linkedin.com/company/ailens-ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
          </Button>
        </div>

        <Separator className="bg-blue-500/20" />

        {/* Bottom Footer */}
        <div className="pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-300 text-sm">
              © Copyright ©2024 AILENS. All Rights Reserved
            </p>
            <div className="flex gap-4 text-sm text-slate-300">
              <Button variant="link" asChild className="text-slate-300 hover:text-blue-400">
                <Link to="/terms">Terms and conditions</Link>
              </Button>
              <Button variant="link" asChild className="text-slate-300 hover:text-blue-400">
                <Link to="/privacy">Privacy policy</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 