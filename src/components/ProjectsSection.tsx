const projects = [
  {
    id: "001",
    title: "Vietnam Stock Market Analysis",
    description:
      "Comprehensive analysis of VN-Index performance using quantitative methods. Built predictive models for market trends using Python and historical data.",
    tags: ["Python", "Pandas", "Data Analysis"],
    status: "COMPLETED",
  },
  {
    id: "002",
    title: "Portfolio Optimization Model",
    description:
      "Developed a Markowitz mean-variance optimization tool for constructing efficient portfolios. Backtested against benchmark indices.",
    tags: ["Excel", "VBA", "Modern Portfolio Theory"],
    status: "COMPLETED",
  },
  {
    id: "003",
    title: "FX Risk Hedging Strategy",
    description:
      "Designed hedging strategies for import/export firms using forward contracts and options. Presented to industry mentors.",
    tags: ["Risk Management", "Derivatives", "FX Markets"],
    status: "COMPLETED",
  },
  {
    id: "004",
    title: "Equity Research Report",
    description:
      "In-depth fundamental analysis and DCF valuation of a publicly listed company. Produced a buy/sell recommendation report.",
    tags: ["Valuation", "DCF", "Financial Modeling"],
    status: "IN_PROGRESS",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">
          <span className="text-accent">##</span> projects
        </h2>
        <div className="w-16 h-px bg-primary mb-10" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="retro-card group hover:border-primary transition-colors duration-300">
              <div className="flex justify-between items-start mb-3">
                <span className="text-xs text-muted-foreground">
                  PROJECT_{project.id}
                </span>
                <span
                  className={`text-xs px-2 py-0.5 border ${
                    project.status === "COMPLETED"
                      ? "border-accent text-accent"
                      : "border-primary text-primary"
                  }`}
                >
                  {project.status}
                </span>
              </div>
              <h3 className="text-lg font-display font-bold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-muted px-2 py-1 text-muted-foreground"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
