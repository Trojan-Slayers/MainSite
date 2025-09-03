"use client";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Features from "@/components/Features";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-bg relative">
      <BackgroundAnimation />
      
      <main className="relative z-10">
        <Hero />
        <ProblemSolution />
        <Features />
        
        {/* CTA Section */}
        <section className="py-24 px-6 text-center animate-slide-in-up">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Campus Communication?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the revolution in educational technology and provide equitable, 
              round-the-clock information access to all students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="px-8 py-4 bg-gradient-primary rounded-lg font-semibold hover:shadow-glow transition-all duration-300 transform hover:scale-105"
                onClick={() => window.location.href = '/demo'}
              >
                Try Live Demo
              </button>
              <button className="px-8 py-4 border border-primary/20 rounded-lg font-semibold hover:border-primary/40 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;