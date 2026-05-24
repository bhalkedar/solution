import { motion } from "framer-motion";
import Container from "../components/Container.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import FeatureCard from "../components/FeatureCard.jsx";
import { staggerContainer } from "../animations/motion.js";
import { features } from "../utils/data.js";

export default function WhyChoose() {
  return (
    <section id="why-choose" className="bg-white py-24">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Trusted by teams that demand precision"
          subtitle="We deliver a premium experience from strategy to launch, with expert support at every step."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
