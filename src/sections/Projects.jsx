import Container from "../components/Container.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { projects } from "../utils/data.js";

export default function Projects() {
  return (
    <section id="projects" className="bg-softwhite py-24">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Projects"
          title="Premium launches built for ambitious teams"
          subtitle="A selection of high-impact projects with premium design, engineering, and performance."
        />
        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
