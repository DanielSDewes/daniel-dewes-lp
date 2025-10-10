import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";
import developerPortrait from "@/assets/developer-portrait.jpg";

const Hero = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/90" />

      <div className="container-custom relative z-10 py-32">
        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-12 items-center ${
            inView ? "animate-fade-up" : "opacity-0"
          }`}
        >
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground font-medium">
                Hello, I'm
              </p>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Daniel Dewes
              </h1>
              <h2 className="text-3xl md:text-4xl font-semibold gradient-text">
                Full-Stack Developer
              </h2>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl">
              Passionate about building efficient and scalable solutions that
              make a difference. Let's create something amazing together.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="hero" size="lg" asChild>
                <a href="#projects">View My Projects</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-glow rounded-full blur-3xl opacity-30 animate-pulse" />
              <img
                src={developerPortrait}
                alt="Daniel Dewes - Full-Stack Developer"
                className="relative rounded-full w-64 h-64 md:w-96 md:h-96 object-cover shadow-2xl ring-4 ring-primary/20"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
