"use client";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Demo = () => {
  return (
    <div className="min-h-screen bg-gradient-bg relative">
      <BackgroundAnimation />
      
      <main className="relative z-10">
        {/* Header */}
        <header className="p-6">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-foreground"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gradient-primary mb-2">
                Live Demo
              </h1>
              <p className="text-muted-foreground">
                Experience the multilingual chatbot in action
              </p>
            </div>
            
            <div className="w-24" /> {/* Spacer for alignment */}
          </div>
        </header>

        {/* Demo Introduction */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto text-center mb-8 animate-slide-in-up">
            <h2 className="text-2xl font-bold mb-4">
              Try Our <span className="text-gradient-accent">Multilingual Assistant</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              This interactive demo showcases how our AI chatbot handles queries in multiple 
              Indian languages. Try asking about fees, scholarships, or timetables in your 
              preferred language!
            </p>
          </div>
          
          {/* Accessibility Features Info */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-card/30 rounded-lg border border-border/30">
                <div className="text-2xl mb-2">♿</div>
                <h3 className="font-semibold mb-2">Screen Reader Compatible</h3>
                <p className="text-sm text-muted-foreground">
                  Full ARIA support for assistive technologies
                </p>
              </div>
              <div className="p-4 bg-card/30 rounded-lg border border-border/30">
                <div className="text-2xl mb-2">🎨</div>
                <h3 className="font-semibold mb-2">High Contrast Mode</h3>
                <p className="text-sm text-muted-foreground">
                  Enhanced visibility for low vision users
                </p>
              </div>
              <div className="p-4 bg-card/30 rounded-lg border border-border/30">
                <div className="text-2xl mb-2">📝</div>
                <h3 className="font-semibold mb-2">Adjustable Font Size</h3>
                <p className="text-sm text-muted-foreground">
                  Customizable text size for better readability
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ChatBot Component */}
        <section className="pb-12">
        </section>

        {/* Demo Features */}
        <section className="py-12 px-6 border-t border-border/20">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-6 text-center">Demo Features</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-gradient-primary">Try These Queries:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• "What are the fee details?" (English)</li>
                  <li>• "फीस कितनी है?" (Hindi)</li>
                  <li>• "छात्रवृत्ति की जानकारी दें" (Hindi)</li>
                  <li>• "Show me the timetable" (English)</li>
                  <li>• "தமிழில் உதவி" (Tamil)</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-gradient-accent">Accessibility Features:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Keyboard navigation (Tab, Enter, Arrow keys)</li>
                  <li>• Screen reader announcements</li>
                  <li>• High contrast toggle</li>
                  <li>• Adjustable font sizes</li>
                  <li>• Focus management</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Demo;