import Container from "./Container.jsx";
import { navLinks, services, socialLinks } from "../utils/data.js";

export default function Footer() {
  return (
    <footer className="border-t border-lightgray/70 bg-white">
      <Container className="grid gap-10 py-16 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-matte text-white">
              SS
            </span>
            <span className="text-lg font-semibold">Syncros Solutions</span>
          </div>
          <p className="text-sm text-matte/70">
            Premium software engineering, AI automations, and digital experiences built for modern
            businesses.
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-lightgray text-matte/70 transition hover:border-matte/40 hover:text-matte"
              >
                <item.icon />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-matte">Navigation</h4>
          <ul className="mt-4 space-y-3 text-sm text-matte/70">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition hover:text-matte">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-matte">Services</h4>
          <ul className="mt-4 space-y-3 text-sm text-matte/70">
            {services.slice(0, 7).map((service) => (
              <li key={service.title}>
                <a href="#services" className="transition hover:text-matte">
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-matte">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-matte/70">
            <li>syncrossolutions@gmail.com</li>
            <li>Remote-first, global delivery</li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-lightgray/70 py-6">
        <Container className="flex flex-col items-center justify-between gap-3 text-xs text-matte/60 md:flex-row">
          <span>© 2026 Syncros Solutions. All rights reserved.</span>
          <span>Designed with premium focus on performance and clarity.</span>
        </Container>
      </div>
    </footer>
  );
}
