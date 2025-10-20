import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const projects = [
    {
      title: "Fokus",
      description:
        "A simple website that helps you stay focused through the Pomodoro Technique with a clean and minimalistic design and the option to play a focus music.",
      tech: ["HTML", "CSS", "JavaScript", "Dom manipulation through JS"],
      github: "https://github.com/DanielSDewes/Fokus",
      demo: "https://fokus-dun.vercel.app/",
    },
    {
      title: "OnlineChat",
      description:
        "A live chat with modern interface, failure tolerance and distributed architecture.",
      tech: ["Distributed Systems", "Real-time", "Chat", "Typescript", "React", "Tailwind CSS", "Web Sockets"],
      github: "https://github.com/DanielSDewes/ChatOnline",
      //demo: "https://github.com/DanielSDewes/ChatOnline",
    },
    {
      title: "Studies Controller",
      description:
        "A site for adding and timing your tasks and studies, built with TypeScript.",
      tech: ["TypeScript", "Task Management", "Timer"],
      github: "https://github.com/DanielSDewes/ControlaEstudos",
      demo: "https://controla-estudos.vercel.app/",
    },
    {
      title: "Weather and News",
      description:
        "A website with a backend that controls user logins, and is integrated with two APIs to search for news and the weather in your local area. Built with Python (FastAPI) and React.",
      tech: ["Python", "FastAPI", "React", "APIs"],
      github: "https://github.com/DanielSDewes/NoticiasEClima",
      // demo: "https://github.com/DanielSDewes/NoticiasEClima",
    },
    {
      title: "Background Remover",
      description:
        "An API built with Python and FastAPI to remove images backgrounds.",
      tech: ["Python", "FastAPI", "Image Processing"],
      github: "https://github.com/DanielSDewes/API-remove-background",
      // demo: "https://github.com/DanielSDewes/API-remove-background",
    },
    {
      title: "MM Bier Website",
      description:
        "Landing page for a craft beer company, built with Typescript and Tailwind CSS.",
      tech: ["Typescript", "CSS", "Vite", "React"],
      github: "https://github.com/DanielSDewes/mmbier",
      demo: "https://mmbier.vercel.app/",
    },
    {
      title: "Adapter Pattern Design",
      description:
        "An website for an apresentation about the Adapter Design Pattern in portuguese, utilizing Typescript, React and Tailwind CSS.",
      tech: ["Typescript", "CSS", "React"],
      github: "https://github.com/DanielSDewes/Adapter-apresentacao",
      demo: "https://adapter-apresentacao.vercel.app/",
    },
    {
      title: "Student Journey",
      description:
        "An website for an apresentation about the the journey of a student ingressing in the university, made for an assignment in portuguese, utilizing Typescript, React and Tailwind CSS.",
      tech: ["Typescript", "CSS", "React"],
      github: "https://github.com/DanielSDewes/jornada-estudante-uri",
      demo: "https://jornada-estudante-uri.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div
          ref={ref}
          className={`${inView ? "animate-fade-up" : "opacity-0"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A showcase of my practical projects that I've developed on my free time to sharpen my skills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary/20 text-secondary rounded-md text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  {(project.title === "Fokus" || project.title === "Studies Controller" || project.title === "MM Bier Website" || project.title === "Adapter Pattern Design" || project.title === "Student Journey") && (
                    <Button variant="secondary" size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
