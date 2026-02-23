import { useState } from "react";

const links = [
  { label: "about", href: "#about" },
  { label: "skills", href: "#skills" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="flex items-center justify-between px-6 md:px-16 lg:px-24 py-4">
        <a href="#" className="font-display font-bold text-primary text-glow text-sm tracking-wider">
          ~/portfolio
        </a>

        {/* Desktop */}
        <div className="hidden md:flex gap-8">
          {links.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs tracking-wider text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-accent">0{i + 1}.</span> {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground text-sm"
          onClick={() => setOpen(!open)}
        >
          {open ? "[x]" : "[=]"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 space-y-4">
          {links.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-sm tracking-wider text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-accent">0{i + 1}.</span> {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
