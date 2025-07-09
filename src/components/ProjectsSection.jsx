import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "KETA Real Estate Official Website",
    description:
      "An online platform offering premium real estate listings and investment opportunities, specializing in luxury properties across Dubai and beyond",
    image: "/projects/ketareal.png",
    tags: ["React", "TailwindCSS", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "KETA Job Official Website",
    description:
      "A Swiss recruitment platform specializing in healthcare and other industries.",
    image: "/projects/ketajob.png",
    tags: ["React", "Node.js", "TwailwindCSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "KETA Immotreu Official Website",
    description:
      "A Swiss consulting firm offering fiduciary, tax, and real estate transaction services tailored to client needs",
    image: "/projects/ketaimmotreu.png",
    tags: ["WordPress"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Arbresha's Portfolio",
    description:
      "A website portfolio for a frontend developer, showcasing their skills, work experience, and projects.",
    image: "/projects/APortfolio.png",
    tags: ["React", "Node.js", "TwailwindCSS", "ThreeJs"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/ArbereshaA"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
