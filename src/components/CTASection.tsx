import { Button } from "@/components/ui/button";
import { ShoppingBag, ArrowRight } from "lucide-react";

const CTASection = () => {
  // const scrollToContact = () => {
  //   const element = document.getElementById("contact");
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

    const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="shop" className="py-20 sm:py-32 bg-accent text-accent-foreground relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-accent-foreground/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent-foreground/5 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-accent-foreground/10 mb-4 animate-bounce">
            <ShoppingBag className="w-10 h-10 sm:w-12 sm:h-12" />
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Ready to Experience{" "}
            <span className="block mt-2">The Ultimate Crunch?</span>
          </h2>

          <p className="text-xl sm:text-2xl md:text-3xl font-light opacity-95 max-w-2xl mx-auto">
            Order now and taste the difference that quality ingredients make
          </p>

          <div className="pt-4">
            <Button
              variant="hero"
              size="xl"
              onClick={() => scrollToSection("flavors")}
              className="bg-accent-foreground text-accent hover:bg-accent-foreground/90 group shadow-2xl"
            >
              Shop All Flavors
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
