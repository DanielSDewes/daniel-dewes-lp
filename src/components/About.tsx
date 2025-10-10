import { useInView } from "react-intersection-observer";
import { Code2, Database, Zap } from "lucide-react";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Expertise",
      description: "Proficient in multiple languages and frameworks",
    },
    {
      icon: Database,
      title: "Database Mastery",
      description: "Experienced with various DBMS solutions",
    },
    {
      icon: Zap,
      title: "Agile Mindset",
      description: "Adapted to Scrum & Kanban methodologies",
    },
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div
          ref={ref}
          className={`${inView ? "animate-fade-up" : "opacity-0"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto" />
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm a <span className="text-foreground font-semibold">Brazilian full-stack developer</span> with
                solid experience in <span className="text-primary font-semibold">GeneXus, Python, JavaScript, React, Typescript, and C</span>. 
                I specialize in building robust applications with a focus on efficiency and scalability.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                With expertise in database management systems including{" "}
                <span className="text-primary font-semibold">PostgreSQL, Oracle, SQL Server, MySQL, and Firebird</span>, 
                I create reliable data-driven solutions. I'm experienced in API integrations using tools like Postman 
                and work effectively in agile environments with{" "}
                <span className="text-foreground font-semibold">Scrum & Kanban</span>.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mt-4">
               I have several years of experience working with complex enterprise systems that manage{" "}
                <span className="text-secondary font-semibold">financial, accounting, and inventory operations, as well as handling electronic invoicing (NF-e) processes.</span> With multiple 
                practical projects, continuously expanding my skillset and embracing new technologies.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="bg-card rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <item.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
