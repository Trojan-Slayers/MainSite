const BackgroundAnimation = () => {
    return (
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Floating language symbols */}
        <div className="absolute top-10 left-10 animate-float delay-0">
          <div className="w-8 h-8 rounded-full bg-gradient-primary opacity-20 animate-pulse-glow" />
        </div>
        <div className="absolute top-32 right-20 animate-float delay-1000">
          <div className="w-6 h-6 rounded-full bg-gradient-accent opacity-30 animate-pulse-glow" />
        </div>
        <div className="absolute bottom-40 left-1/4 animate-float delay-2000">
          <div className="w-10 h-10 rounded-full bg-gradient-primary opacity-15 animate-pulse-glow" />
        </div>
        <div className="absolute bottom-20 right-1/3 animate-float delay-3000">
          <div className="w-4 h-4 rounded-full bg-gradient-accent opacity-25 animate-pulse-glow" />
        </div>
        
        {/* Drifting chat bubbles */}
        <div className="absolute top-1/4 left-1/3 animate-drift">
          <div className="px-3 py-2 bg-primary/10 rounded-full text-xs text-primary border border-primary/20">
            हिंदी
          </div>
        </div>
        <div className="absolute top-2/3 right-1/4 animate-drift delay-4000">
          <div className="px-3 py-2 bg-accent/10 rounded-full text-xs text-accent border border-accent/20">
            English
          </div>
        </div>
        <div className="absolute bottom-1/3 left-1/5 animate-drift delay-6000">
          <div className="px-3 py-2 bg-primary/10 rounded-full text-xs text-primary border border-primary/20">
            मराठी
          </div>
        </div>
        <div className="absolute top-1/6 right-1/3 animate-drift delay-2000">
          <div className="px-3 py-2 bg-accent/10 rounded-full text-xs text-accent border border-accent/20">
            తెలుగు
          </div>
        </div>
        <div className="absolute bottom-1/6 right-1/6 animate-drift delay-8000">
          <div className="px-3 py-2 bg-primary/10 rounded-full text-xs text-primary border border-primary/20">
            தமிழ்
          </div>
        </div>
        <div className="absolute top-3/5 left-1/6 animate-drift delay-5000">
          <div className="px-3 py-2 bg-accent/10 rounded-full text-xs text-accent border border-accent/20">
            ગુજરાતી
          </div>
        </div>
        <div className="absolute bottom-2/5 right-2/5 animate-drift delay-7000">
          <div className="px-3 py-2 bg-primary/10 rounded-full text-xs text-primary border border-primary/20">
            বাংলা
          </div>
        </div>
        <div className="absolute top-2/5 left-2/5 animate-drift delay-9000">
          <div className="px-3 py-2 bg-accent/10 rounded-full text-xs text-accent border border-accent/20">
            ಕನ್ನಡ
          </div>
        </div>
        <div className="absolute bottom-3/4 left-3/4 animate-drift delay-3000">
          <div className="px-3 py-2 bg-primary/10 rounded-full text-xs text-primary border border-primary/20">
            മലയാളം
          </div>
        </div>
        <div className="absolute top-1/5 right-2/3 animate-drift delay-1000">
          <div className="px-3 py-2 bg-accent/10 rounded-full text-xs text-accent border border-accent/20">
            ਪੰਜਾਬੀ
          </div>
        </div>
        <div className="absolute bottom-1/4 left-2/3 animate-drift delay-4500">
          <div className="px-3 py-2 bg-primary/10 rounded-full text-xs text-primary border border-primary/20">
            اردو
          </div>
        </div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" 
               style={{
                 backgroundImage: `
                   linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                   linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                 `,
                 backgroundSize: '50px 50px'
               }} 
          />
        </div>
      </div>
    );
  };
  
  export default BackgroundAnimation;