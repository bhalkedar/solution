import { motion } from "framer-motion";
import Container from "../components/Container.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import StatCard from "../components/StatCard.jsx";
import { fadeUp, staggerContainer } from "../animations/motion.js";
import { stats } from "../utils/data.js";

export default function About() {
  return (
    <section id="about" className="bg-softwhite py-24">
      <Container className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-8"
        >
          <SectionHeading
            eyebrow="About Syncros Solutions"
            title="We design, engineer, and automate digital systems that feel effortless."
            subtitle="Our mission is to help modern businesses scale with premium software, AI intelligence, and automation that drives real impact."
          />
          <motion.div variants={fadeUp} className="space-y-4 text-sm text-matte/70">
            <p>
              We blend product strategy, elegant UI/UX, and AI-driven innovation to deliver
              experiences that feel premium, trustworthy, and fast. Our vision is to help teams
              operate with AI-first efficiency and clarity.
            </p>
            <p>
              From AI workflow systems to custom software platforms, our approach ensures your team
              spends less time on manual operations and more time growing the business.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1"
        >
          {stats.map((item) => (
            <StatCard key={item.label} {...item} />
          ))}
          <div className="glass rounded-2xl px-6 py-5">
            <h3 className="text-base font-semibold text-matte">AI-Driven Innovation</h3>
            <p className="mt-2 text-sm text-matte/70">
              We embed AI into your workflows to unlock new efficiencies and intelligent insights.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
