import TypewriterText from "./TypewriterText";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 relative scanlines">
      <div className="max-w-4xl">
        <p className="text-muted-foreground text-sm mb-4 tracking-widest uppercase">
          // portfolio.init()
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-tight mb-6">
          <span className="text-foreground">Hello, I'm</span>
          <br />
          <span className="text-primary text-glow">Nguyen Mai Chi</span>
        </h1>
        <div className="text-xl md:text-2xl font-display mb-8 h-10">
          <TypewriterText
            texts={[
              "Financial Analyst",
              "Investment Strategist",
              "Foreign Trade Student",
              "Data-Driven Thinker",
            ]}
          />
        </div>
        <p className="text-muted-foreground max-w-xl text-sm leading-relaxed mb-10">
          Foreign Trade University graduate specializing in Financial Analysis & Investment.
          Passionate about capital markets, quantitative analysis, and building
          data-driven investment strategies.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a
            href="#projects"
            className="border border-primary text-primary px-6 py-3 text-sm tracking-wider hover:bg-primary hover:text-primary-foreground transition-all duration-300 border-glow"
          >
            VIEW_PROJECTS()
          </a>
          <a
            href="#contact"
            className="border border-accent text-accent px-6 py-3 text-sm tracking-wider hover:bg-accent hover:text-accent-foreground transition-all duration-300"
          >
            CONTACT_ME()
          </a>
        </div>
      </div>

      {/* Decorative terminal line */}
      <div className="absolute bottom-10 left-6 md:left-16 lg:left-24 text-muted-foreground text-xs">
        <span className="text-accent">user@portfolio</span>:<span className="text-primary">~</span>$ scroll_down
        <span className="animate-pulse ml-1">▼</span>
      </div>
    </section>
  );
};

export default HeroSection;
