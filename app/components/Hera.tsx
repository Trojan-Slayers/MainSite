import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-chatbot.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <div className="space-y-8 animate-slide-in-up">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Language Agnostic{" "}
              <span className="text-gradient-primary">Chatbot</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Breaking language barriers in campus communication with intelligent multilingual support for Hindi, English, and regional languages.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
              Learn More
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary/20 hover:border-primary/40 transition-colors"
              onClick={() => window.location.href = '/demo'}
            >
              View Demo
            </Button>
          </div>
          
          {/* Key stats */}
          <div className="flex gap-8 pt-8 border-t border-border">
            <div>
              <div className="text-2xl font-bold text-gradient-accent">5+</div>
              <div className="text-sm text-muted-foreground">Languages</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gradient-accent">24/7</div>
              <div className="text-sm text-muted-foreground">Availability</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gradient-accent">100%</div>
              <div className="text-sm text-muted-foreground">Privacy</div>
            </div>
          </div>
        </div>
        
        {/* Hero image */}
        <div className="relative animate-slide-in-up delay-300">
          <div className="relative">
            <Image 
              src={heroImage} 
              alt="Multilingual AI Chatbot Interface"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl" />
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 animate-float">
            <div className="bg-gradient-accent p-3 rounded-full shadow-accent-glow">
              <svg className="w-6 h-6 text-background" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;