import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import Container from "../components/Container.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Button from "../components/Button.jsx";
import { socialLinks } from "../utils/data.js";

export default function Contact() {
  return (
    <section id="contact" className="bg-softwhite py-24">
      <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <SectionHeading
            eyebrow="Contact"
            title="Let's build your next premium product"
            subtitle="Tell us about your vision and we'll craft a tailored strategy and execution plan."
          />
          <form
            className="glass space-y-5 rounded-2xl p-6"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-xs font-medium text-matte" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  aria-label="Name"
                  className="w-full rounded-xl border border-lightgray bg-white px-4 py-3 text-sm outline-none transition focus:border-accent"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-matte" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  aria-label="Email"
                  className="w-full rounded-xl border border-lightgray bg-white px-4 py-3 text-sm outline-none transition focus:border-accent"
                  placeholder="you@company.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-medium text-matte" htmlFor="message">
                Project requirements
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                aria-label="Project requirements"
                className="w-full rounded-xl border border-lightgray bg-white px-4 py-3 text-sm outline-none transition focus:border-accent"
                placeholder="Tell us about your project"
              />
            </div>
            <Button type="submit" variant="primary" className="w-full">
              Submit Request
            </Button>
          </form>
        </div>

        <div className="space-y-6">
          <div className="glass rounded-2xl p-6 space-y-4">
            <h3 className="text-base font-semibold text-matte">Company Info</h3>
            <div className="space-y-3 text-sm text-matte/70">
              <p className="flex items-center gap-2">
                <FiMail /> hello@syncrossolutions.com
              </p>
              <p className="flex items-center gap-2">
                <FiPhone /> +91 98765 43210
              </p>
              <p className="flex items-center gap-2">
                <FiMapPin /> Global delivery, based in India
              </p>
            </div>
            <div className="flex items-center gap-3 pt-2">
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
        </div>
      </Container>
    </section>
  );
}
