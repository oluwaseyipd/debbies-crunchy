import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary/95 backdrop-blur-md shadow-lg" : "bg-primary/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent flex items-center justify-center font-bold text-xl sm:text-2xl text-accent-foreground">
              D
            </div>
            <span className="text-lg sm:text-xl font-bold text-primary-foreground tracking-tight">
              Debbie's Crunchy
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("flavors")}
              className="text-primary-foreground/90 hover:text-primary-foreground transition-colors duration-200 font-medium"
            >
              Flavors
            </button>
            <button
              onClick={() => scrollToSection("why-us")}
              className="text-primary-foreground/90 hover:text-primary-foreground transition-colors duration-200 font-medium"
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="text-primary-foreground/90 hover:text-primary-foreground transition-colors duration-200 font-medium"
            >
              Reviews
            </button>
            <Button variant="cta" size="default" onClick={() => scrollToSection("shop")}>
              Shop Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary-foreground/10">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("flavors")}
                className="text-primary-foreground/90 hover:text-primary-foreground transition-colors duration-200 font-medium text-left"
              >
                Flavors
              </button>
              <button
                onClick={() => scrollToSection("why-us")}
                className="text-primary-foreground/90 hover:text-primary-foreground transition-colors duration-200 font-medium text-left"
              >
                Why Us
              </button>
              <button
                onClick={() => scrollToSection("reviews")}
                className="text-primary-foreground/90 hover:text-primary-foreground transition-colors duration-200 font-medium text-left"
              >
                Reviews
              </button>
              <Button variant="cta" size="default" onClick={() => scrollToSection("shop")} className="w-full">
                Shop Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
