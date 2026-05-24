import Container from "../components/Container.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import ProcessStep from "../components/ProcessStep.jsx";
import { processSteps } from "../utils/data.js";

export default function Process() {
  return (
    <section id="process" className="bg-white py-24">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Process"
          title="A refined workflow from discovery to launch"
          subtitle="A transparent, premium delivery model with high-touch collaboration."
        />
        <div className="relative">
          <div className="absolute left-1/2 top-6 hidden h-[calc(100%-48px)] w-px -translate-x-1/2 bg-gradient-to-b from-accent/30 to-transparent lg:block animate-pulseSoft" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <ProcessStep key={step.title} index={index} {...step} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
