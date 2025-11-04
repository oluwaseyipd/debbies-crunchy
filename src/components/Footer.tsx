import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PhoneCallIcon, MessageSquareHeart , MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import LogoImage from "@/assets/main-logo.png";

const Footer = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !message) {
      toast({
        title: "Missing Information",
        description: "Please fill in both name and message fields.",
        variant: "destructive",
      });
      return;
    }

    const whatsappMessage = `Hello! My name is ${name}. ${message}`;
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");
    
    toast({
      title: "Opening WhatsApp",
      description: "Redirecting you to WhatsApp...",
    });

    setName("");
    setMessage("");
  };

  return (
    <footer id="contact" className="bg-footer text-footer-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-bold">Get In Touch</h3>
              <p className="text-footer-foreground/80">
                Have questions? Send us a message via WhatsApp
              </p>
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-footer-foreground/10 border-footer-foreground/20 text-footer-foreground placeholder:text-footer-foreground/50 focus:border-accent"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="bg-footer-foreground/10 border-footer-foreground/20 text-footer-foreground placeholder:text-footer-foreground/50 focus:border-accent resize-none"
                />
              </div>
              <Button
                type="submit"
                variant="cta"
                size="lg"
                className="w-full group"
              >
                <MessageCircle className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Send via WhatsApp
              </Button>
            </form>
          </div>

          {/* Brand Info & Social */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img src={LogoImage} alt="Logo" className="w-12" />
                <span className="text-2xl font-bold">Debbie's Crunchy</span>
              </div>
              <p className="text-footer-foreground/80 leading-relaxed max-w-md">
                Elevating the art of snacking with handcrafted, gourmet crunchy treats made from
                the finest ingredients and exotic spice blends.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Connect</h4>
              <div className="flex flex-col gap-4">
                <div className= "flex gap-x-3 w-[300px] h-10 rounded-full bg-footer-foreground/10">
                    <p className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110">
                       <PhoneCallIcon className="w-5 h-5" />
                    </p>
                    <span className="flex items-center">+2349063578189</span>
                </div>

                <div className= "flex gap-x-3 w-[300px] h-10 rounded-full bg-footer-foreground/10">
                    <p className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110">
                       <MessageSquareHeart className="w-5 h-5" />
                    </p>
                    <span className="flex items-center">+2347089855253</span>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-footer-foreground/10">
              <p className="text-sm text-footer-foreground/60">
                &copy; {new Date().getFullYear()} Debbie's Crunchy. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
