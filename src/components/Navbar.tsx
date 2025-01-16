import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"
import logo1 from "@/assets/logo2.png"

export function Navbar() {
  const location = useLocation()

  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-14 items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src={logo1} 
              alt="AILENS Logo" 
              className="h-8 w-auto"
            />
          </Link>

          <div className="flex items-center gap-6">
            {/* <Link 
              to="/" 
              className={cn(
                "transition-colors",
                isActive("/") 
                  ? "text-[#1594FD] font-semibold" 
                  : "text-foreground hover:text-[#1594FD]"
              )}
            >
              Home
            </Link> */}
            <Link 
              to="/about" 
              className={cn(
                "transition-colors",
                isActive("/about") 
                  ? "text-[#1594FD] font-semibold" 
                  : "text-foreground hover:text-[#1594FD]"
              )}
            >
              About
            </Link>
            {/* <Link 
              to="/expertise" 
              className={cn(
                "transition-colors",
                isActive("/expertise") 
                  ? "text-[#1594FD] font-semibold" 
                  : "text-foreground hover:text-[#1594FD]"
              )}
            >
              Expertise
            </Link> */}
            <Link 
              to="/offerings" 
              className={cn(
                "transition-colors",
                isActive("/offerings") 
                  ? "text-[#1594FD] font-semibold" 
                  : "text-foreground hover:text-[#1594FD]"
              )}
            >
              Products
            </Link>
            <Link 
              to="/careers" 
              className={cn(
                "transition-colors",
                isActive("/careers") 
                  ? "text-[#1594FD] font-semibold" 
                  : "text-foreground hover:text-[#1594FD]"
              )}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className={cn(
                "transition-colors",
                isActive("/contact") 
                  ? "text-[#1594FD] font-semibold" 
                  : "text-foreground hover:text-[#1594FD]"
              )}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 