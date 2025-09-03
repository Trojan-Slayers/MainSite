import { Card } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: "🌍",
      title: "Multilingual Support",
      description: "Supports Hindi, English, and regional Indian languages with accurate intent recognition across all linguistic contexts."
    },
    {
      icon: "🧠",
      title: "Context Management",
      description: "Maintains conversation context across multiple turns, providing coherent and relevant responses throughout the interaction."
    },
    {
      icon: "📚",
      title: "Institutional Knowledge",
      description: "Ingests FAQs, circulars, and PDFs to provide accurate information about fees, scholarships, and timetables."
    },
    {
      icon: "🔄",
      title: "Human Fallback",
      description: "Seamlessly escalates complex queries to human staff when automated responses aren't sufficient."
    },
    {
      icon: "📊",
      title: "Analytics & Logs",
      description: "Daily conversation logs enable continuous improvement and provide insights into common student queries."
    },
    {
      icon: "🔗",
      title: "Easy Integration",
      description: "Embeds seamlessly into college websites and popular messaging platforms for maximum accessibility."
    },
    {
      icon: "🔒",
      title: "Privacy First",
      description: "Ensures student data privacy and security while maintaining accurate and helpful responses."
    },
    {
      icon: "👥",
      title: "Student Maintainable",
      description: "Designed to be maintained and updated by student volunteers using intuitive drag-and-drop interfaces."
    }
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-4xl font-bold mb-6">
            Powerful Features for{" "}
            <span className="text-gradient-accent">Campus Communication</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Designed to reduce queues, improve accessibility, and provide 24/7 support 
            for students in their preferred language.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-300 animate-slide-in-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;