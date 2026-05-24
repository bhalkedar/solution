import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      <div className="flex flex-col items-center gap-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center gap-3"
        >
          <span className="h-10 w-10 rounded-2xl bg-matte text-white flex items-center justify-center text-lg font-semibold">
            SS
          </span>
          <span className="text-lg font-semibold text-matte">Syncros Solutions</span>
        </motion.div>
        <motion.div
          className="h-1 w-24 rounded-full bg-softwhite overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            className="h-full w-8 rounded-full bg-accent"
            animate={{ x: [0, 64, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
