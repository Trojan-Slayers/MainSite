"use client";
const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center animate-slide-in-up">
        <h1 className="text-6xl font-bold mb-4 text-gradient-primary">404</h1>
        <p className="text-xl text-muted-foreground mb-8">Oops! Page not found</p>
        <a 
          href="/" 
          className="inline-flex items-center px-6 py-3 bg-gradient-primary rounded-lg font-semibold hover:shadow-glow transition-all duration-300"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
