const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">
          <span className="text-accent">##</span> about_me
        </h2>
        <div className="w-16 h-px bg-primary mb-10" />

        <div className="grid md:grid-cols-2 gap-10">
          <div className="retro-card">
            <div className="text-xs text-muted-foreground mb-4 border-b border-border pb-2">
              $ cat profile.txt
            </div>
            <div className="space-y-4 text-sm leading-relaxed">
              <p>
                <span className="text-accent">{'>'}</span> A dedicated student at{" "}
                <span className="text-primary">Foreign Trade University</span>,
                specializing in Financial Analysis and Investment.
              </p>
              <p>
                <span className="text-accent">{'>'}</span> Equipped with strong analytical
                skills, financial modeling expertise, and a deep understanding of
                global capital markets.
              </p>
              <p>
                <span className="text-accent">{'>'}</span> Driven by a passion for uncovering
                value through quantitative research and fundamental analysis.
              </p>
            </div>
          </div>

          <div className="retro-card">
            <div className="text-xs text-muted-foreground mb-4 border-b border-border pb-2">
              $ cat credentials.json
            </div>
            <div className="space-y-3 text-sm">
              {[
                { key: "university", value: "Foreign Trade University" },
                { key: "major", value: "Financial Analysis & Investment" },
                { key: "languages", value: '["Vietnamese", "English"]' },
                { key: "interests", value: '["Equities", "Fixed Income", "Derivatives"]' },
                { key: "status", value: '"Seeking Opportunities"' },
              ].map((item) => (
                <div key={item.key} className="flex gap-2">
                  <span className="text-accent">"{item.key}"</span>
                  <span className="text-muted-foreground">:</span>
                  <span className="text-primary">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
