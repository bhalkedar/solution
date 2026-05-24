import { motion } from "framer-motion";
import Container from "../components/Container.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import { staggerContainer } from "../animations/motion.js";
import { services } from "../utils/data.js";

export default function Services() {
  return (
    <section id="services" className="bg-white py-24">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Services"
          title="High-end solutions built for modern companies"
          subtitle="From product design to AI automation, we deliver premium systems that scale with you."
          align="center"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
