const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6 md:px-16 lg:px-24 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">
          <span className="text-accent">##</span> contact
        </h2>
        <div className="w-16 h-px bg-primary mb-10" />

        <div className="retro-card">
          <div className="text-xs text-muted-foreground mb-6 border-b border-border pb-2">
            $ ./send_message.sh
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="text-xs text-muted-foreground mb-2 block tracking-wider">
                NAME:
              </label>
              <input
                type="text"
                className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
                placeholder="enter_name"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-2 block tracking-wider">
                EMAIL:
              </label>
              <input
                type="email"
                className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
                placeholder="enter_email"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-2 block tracking-wider">
                MESSAGE:
              </label>
              <textarea
                rows={5}
                className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                placeholder="type_message_here..."
              />
            </div>
            <button
              type="submit"
              className="border border-primary text-primary px-8 py-3 text-sm tracking-wider hover:bg-primary hover:text-primary-foreground transition-all duration-300 border-glow"
            >
              SEND_MESSAGE()
            </button>
          </form>
        </div>

        <div className="mt-10 flex flex-wrap gap-6 text-sm">
          {[
            { label: "Email", value: "your.email@ftu.edu.vn" },
            { label: "LinkedIn", value: "/in/yourprofile" },
            { label: "GitHub", value: "@yourusername" },
          ].map((link) => (
            <div key={link.label}>
              <span className="text-muted-foreground text-xs">{link.label}: </span>
              <span className="text-primary hover:text-glow cursor-pointer">
                {link.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
