import { motion, useScroll, useTransform } from "framer-motion";
import Container from "../components/Container.jsx";
import Button from "../components/Button.jsx";
import { fadeUp, staggerContainer } from "../animations/motion.js";
import heroIllustration from "../assets/abstract-3d.svg";

export default function Hero() {
  const { scrollY } = useScroll();
  const blobY = useTransform(scrollY, [0, 500], [0, -80]);
  const trustIndicators = [
    { value: "20+", label: "Happy Clients" },
    { value: "Since 2025", label: "Studio Founded" },
    { value: "Master Team", label: "Senior Specialists" },
  ];

  return (
    <section id="home" className="relative overflow-hidden bg-white pb-24 pt-28">
      <motion.div
        className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-accent/15 blur-3xl"
        style={{ y: blobY }}
      />
      <motion.div
        className="absolute -right-32 top-40 h-80 w-80 rounded-full bg-accent/10 blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-[0.3em] text-accent/80"
            >
              Software & AI Automation Studio
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-balance text-4xl font-semibold text-matte md:text-5xl lg:text-6xl"
            >
              We build modern software systems, AI automations, and digital experiences that help
              businesses scale faster.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-matte/70">
              Syncros Solutions partners with ambitious teams to deliver premium products, AI workflows, and
              seamless customer journeys.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Button as="a" href="#contact" variant="primary">
                Start Project
              </Button>
              <Button as="a" href="#projects" variant="secondary">
                View Work
              </Button>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              {trustIndicators.map((item) => (
                <div key={item.label} className="glass rounded-2xl px-4 py-3 text-left">
                  <div className="text-base font-semibold text-matte">{item.value}</div>
                  <p className="text-xs text-matte/60">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-accent/20 via-white to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-[32px] border border-lightgray bg-white/80 p-6 shadow-soft backdrop-blur">
              <img
                src={heroIllustration}
                alt="Abstract 3D illustration"
                className="w-full"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
