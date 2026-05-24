import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { navLinks } from "../utils/data.js";
import Button from "./Button.jsx";
import Container from "./Container.jsx";
import { useScrollPosition } from "../hooks/useScrollPosition.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrollPosition(24);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition duration-300 ${
          scrolled ? "bg-white/80 shadow-soft backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <Container className="flex items-center justify-between py-4">
          <a href="#home" className="flex items-center gap-2 text-sm font-semibold text-matte">
            <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-matte text-white">
              SS
            </span>
            Syncros Solutions
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-matte/70 transition hover:text-matte"
              >
                {link.label}
              </a>
            ))}
            <Button as="a" href="#contact" variant="primary" className="group">
              Start Project
              <FiArrowUpRight className="ml-2 text-base transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Button>
          </nav>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-lightgray lg:hidden"
          >
            <div className="relative h-4 w-5">
              <motion.span
                className="absolute left-0 top-0 h-0.5 w-5 bg-matte"
                animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="absolute left-0 top-1.5 h-0.5 w-5 bg-matte"
                animate={{ opacity: open ? 0 : 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="absolute left-0 top-3 h-0.5 w-5 bg-matte"
                animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </button>
        </Container>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              className="fixed inset-0 z-40 bg-matte/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="fixed left-6 right-6 top-20 z-50 rounded-3xl bg-white p-6 shadow-card"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-sm font-medium text-matte/80 hover:text-matte"
                  >
                    {link.label}
                  </a>
                ))}
                <Button as="a" href="#contact" variant="primary" className="w-full">
                  Start Project
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
