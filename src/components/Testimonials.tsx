import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Oluwaseyi",
    rating: 5,
    text: "I'm not usually a snack enthusiast, but I literally couldn't put the potato chips down! Now I truly believe that sweet-smelling, tasty food gives a kind of joy. I absolutely love these potato chips.",
    initial: "O",
  },
  {
    id: 2,
    name: "Omolayo",
    rating: 5,
    text: "Debbie's Crunchy  is Perfectly cooked, flavorful, and crunchy. I'm hooked! Best chips I've had in a long while. Keep crunching, Debbie!",
    initial: "O",
  },
  {
    id: 3,
    name: "Precious",
    rating: 5,
    text: "I actually enjoyed the chips. It was crispy, sweet and worth craving too. I will surely get more of that🤗",
    initial: "P",
  },
    {
    id: 3,
    name: "Babson",
    rating: 5,
    text: "The plantain chips is crunchy and delicious,so yummy. I can't forget the lovely taste. Kudos to Debbie's crunchy.",
    initial: "B",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const next = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="reviews" className="py-20 sm:py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">What Our Customers Say</h2>
          <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Join thousands of happy snackers
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 shadow-2xl">
            <CardContent className="p-8 sm:p-12">
              <div className="text-center space-y-6">
                {/* Quote Mark */}
                <div className="text-6xl sm:text-7xl font-serif text-accent leading-none">"</div>

                {/* Testimonial Content */}
                <div className="space-y-4">
                  <p className="text-lg sm:text-xl md:text-2xl font-light text-white leading-relaxed">
                    {testimonials[currentIndex].text}
                  </p>
                  <div className="flex justify-center gap-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-lg">
                    {testimonials[currentIndex].initial}
                  </div>
                  <span className="text-lg font-semibold text-white">{testimonials[currentIndex].name}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-accent w-8" : "bg-primary-foreground/30"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
