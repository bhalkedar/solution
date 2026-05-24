import { motion } from "framer-motion";
import { fadeUp } from "../animations/motion.js";

export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <motion.div variants={fadeUp} whileHover={{ y: -4 }} className="glass rounded-2xl p-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-matte text-white">
        <Icon className="text-lg" />
      </div>
      <h3 className="mt-4 text-base font-semibold text-matte">{title}</h3>
      <p className="mt-2 text-sm text-matte/70">{description}</p>
    </motion.div>
  );
}
