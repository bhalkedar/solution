import { FiArrowUpRight } from "react-icons/fi";

export default function ProjectCard({ title, description, image, link, tags }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-lightgray bg-white shadow-card transition hover:-translate-y-1">
      <div className="relative">
        <img
          src={image}
          alt={`${title} preview`}
          loading="lazy"
          className="h-56 w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-matte/50 opacity-0 transition group-hover:opacity-100">
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-matte"
          >
            View Live <FiArrowUpRight />
          </a>
        </div>
      </div>
      <div className="space-y-3 p-6">
        <h3 className="text-lg font-semibold text-matte">{title}</h3>
        <p className="text-sm text-matte/70">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-lightgray px-3 py-1 text-xs text-matte/70"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
