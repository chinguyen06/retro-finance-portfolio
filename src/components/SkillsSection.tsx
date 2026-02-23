const skills = [
  { name: "Financial Modeling", level: 90 },
  { name: "Equity Valuation", level: 85 },
  { name: "Risk Management", level: 80 },
  { name: "Portfolio Theory", level: 85 },
  { name: "Excel / VBA", level: 90 },
  { name: "Python (Pandas)", level: 75 },
  { name: "Bloomberg Terminal", level: 70 },
  { name: "Technical Analysis", level: 80 },
];

const tools = [
  "Excel", "Python", "Bloomberg", "FactSet",
  "Stata", "R", "Power BI", "SQL",
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-6 md:px-16 lg:px-24 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">
          <span className="text-accent">##</span> skills_matrix
        </h2>
        <div className="w-16 h-px bg-primary mb-10" />

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-xs text-muted-foreground mb-6 tracking-wider">
              // core competencies
            </p>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-sm overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs text-muted-foreground mb-6 tracking-wider">
              // tools & technologies
            </p>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="border border-border px-4 py-2 text-xs tracking-wider hover:border-primary hover:text-primary transition-colors duration-300"
                >
                  {tool}
                </span>
              ))}
            </div>

            <div className="retro-card mt-8">
              <div className="text-xs text-muted-foreground mb-3 border-b border-border pb-2">
                $ cat certifications.log
              </div>
              <ul className="space-y-2 text-sm">
                {[
                  "CFA Level I Candidate",
                  "Financial Risk Manager (FRM)",
                  "Bloomberg Market Concepts",
                  "Advanced Excel Certification",
                ].map((cert) => (
                  <li key={cert} className="flex items-center gap-2">
                    <span className="text-accent text-xs">▸</span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
