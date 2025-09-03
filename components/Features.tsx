const Features = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <h3 className="text-xl font-semibold mb-4">24/7 Availability</h3>
            <p className="text-muted-foreground">Always accessible when students need information</p>
          </div>
          <div className="text-center p-6">
            <h3 className="text-xl font-semibold mb-4">Instant Responses</h3>
            <p className="text-muted-foreground">Get answers in seconds, not hours</p>
          </div>
          <div className="text-center p-6">
            <h3 className="text-xl font-semibold mb-4">Multi-language Support</h3>
            <p className="text-muted-foreground">Breaking down language barriers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;


