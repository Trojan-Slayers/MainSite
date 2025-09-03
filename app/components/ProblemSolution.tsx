const ProblemSolution = () => {
    return (
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Problem */}
            <div className="animate-slide-in-up">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-6 text-gradient-primary">
                  The Challenge
                </h2>
                <div className="space-y-6 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    Campus offices are overwhelmed with hundreds of repetitive queries about 
                    fee deadlines, scholarship forms, and timetable changes.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 animate-pulse-glow" />
                      <p>Long queues strain both staff and students</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 animate-pulse-glow" />
                      <p>Language barriers create communication gaps</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 animate-pulse-glow" />
                      <p>Information exists but is hard to access</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Solution */}
            <div className="animate-slide-in-up delay-300">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-6 text-gradient-accent">
                  Our Solution
                </h2>
                <div className="space-y-6 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    A multilingual AI chatbot that understands student needs and 
                    provides instant, accurate responses in their preferred language.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 animate-pulse-glow" />
                      <p>24/7 availability reduces wait times to zero</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 animate-pulse-glow" />
                      <p>Multilingual support in Hindi, English, and regional languages</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 animate-pulse-glow" />
                      <p>Intelligent content curation from existing documents</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Impact metrics */}
          <div className="mt-16 p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl border border-primary/10 animate-slide-in-up">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-gradient-primary mb-2">90%</div>
                <div className="text-muted-foreground">Reduction in Queue Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient-accent mb-2">5+</div>
                <div className="text-muted-foreground">Supported Languages</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Student Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ProblemSolution;