import { motion } from "framer-motion";
import { fadeUp } from "../animations/motion.js";

export default function ServiceCard({ icon: Icon, title, description }) {
  return (
    <motion.div variants={fadeUp} whileHover={{ y: -6 }} className="gradient-border">
      <div className="glass h-full rounded-2xl p-6 transition">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
          <Icon className="text-xl" />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-matte">{title}</h3>
        <p className="mt-2 text-sm text-matte/70">{description}</p>
      </div>
    </motion.div>
  );
}
