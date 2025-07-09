import { Briefcase, Code, Languages, User } from "lucide-react";

export const AboutSection = () => {
  const languages = [
    { name: "Albanian", emoji: "🇦🇱" },
    { name: "Macedonian", emoji: "🇲🇰" },
    { name: "English", emoji: "🇬🇧" },
    { name: "German", emoji: "🇩🇪" },
  ];
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Frontend Developer Bringing Ideas to Life
            </h3>

            <p className="text-muted-foreground">
              I’m a frontend developer focused on building responsive,
              accessible, and visually engaging web interfaces. My work is
              guided by precision, performance, and the belief that great user
              experiences are built with clean, thoughtful code.
            </p>

            <p className="text-muted-foreground">
              I care deeply about how things look—but even more about how they
              work. Every detail matters, from the flow of a page to the feel of
              a button.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="./ArbreshaAjrulaCV.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
            <div className="pt-6 flex flex-wrap gap-2 justify-center sm:justify-start">
              {["Albanian", "Macedonian", "English", "German"].map((lang) => (
                <span
                  key={lang}
                  className="flex items-center gap-2 px-2 py-1 text-sm rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                >
                  <Languages></Languages>
                  {lang}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces and seamless user
                    experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects from conception to completion with agile
                    methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
