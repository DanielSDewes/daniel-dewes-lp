import { useInView } from "react-intersection-observer";

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "JavaScript", "React", "Typescript", "C", "GeneXus"],
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "Oracle", "SQL Server", "MySQL", "Firebird", "MongoDB"],
    },
    {
      title: "Tools & Technologies",
      skills: ["Postman", "Git", "Jira", "FastAPI", "N8N", "Docker"],
    },
    {
      title: "Methodologies",
      skills: ["Scrum", "Kanban", "Agile", "REST APIs"],
    },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div
          ref={ref}
          className={`${inView ? "animate-fade-up" : "opacity-0"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technical Skills
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto" />
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-semibold mb-6 gradient-text">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium hover:bg-primary/20 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
