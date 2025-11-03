import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-snacks.jpg";

const Hero = () => {
  const scrollToShop = () => {
    const element = document.getElementById("shop");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
          transform: "translateZ(0)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-2xl">
            The Gourmet Crunch That{" "}
            <span className="text-accent drop-shadow-lg">Elevates</span> Your Snack Game
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/95 max-w-2xl mx-auto font-light drop-shadow-lg">
            Handcrafted with exotic spices and fresh ingredients for a taste experience like no other
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="hero" size="xl" onClick={scrollToShop}>
              Shop All Flavors
            </Button>
            <Button
              variant="outline"
              size="xl"
              onClick={() => document.getElementById("flavors")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:border-white/50"
            >
              Explore Flavors
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
