import { Leaf, Heart, Sparkles, Award } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description: "Sourced daily from trusted local farms and suppliers",
  },
  {
    icon: Heart,
    title: "Hand-Crafted",
    description: "Every batch made with care and attention to detail",
  },
  {
    icon: Sparkles,
    title: "Unique Flavors",
    description: "Exotic spice blends you won't find anywhere else",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Award-winning recipes perfected over years",
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-20 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Why Choose Debbie's Crunchy?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            We're committed to delivering excellence in every bite
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center space-y-4 p-6 rounded-lg hover:bg-background/50 transition-all duration-300 group"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
