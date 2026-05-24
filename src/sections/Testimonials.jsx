import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "../components/Container.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import TestimonialCard from "../components/TestimonialCard.jsx";
import { testimonials } from "../utils/data.js";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((prev) => (prev + 1) % testimonials.length),
      6000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="bg-softwhite py-24">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Testimonials"
          title="Teams love the clarity and polish we deliver"
          subtitle="Premium partnerships that create lasting value and measurable growth."
          align="center"
        />
        <div className="flex flex-col items-center gap-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[index].name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-2xl"
            >
              <TestimonialCard {...testimonials[index]} />
            </motion.div>
          </AnimatePresence>
          <div className="flex items-center gap-2">
            {testimonials.map((item, i) => (
              <button
                key={item.name}
                type="button"
                aria-label={`Show testimonial from ${item.name}`}
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full transition ${
                  i === index ? "bg-accent" : "bg-matte/20"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
