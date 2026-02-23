const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground">
          <span className="text-accent">©</span> 2026 — Designed & Built with{" "}
          <span className="text-primary">passion</span>
        </p>
        <p className="text-xs text-muted-foreground">
          <span className="text-accent">$</span> echo "Foreign Trade University"
        </p>
      </div>
    </footer>
  );
};

export default Footer;
