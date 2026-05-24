import { FiStar } from "react-icons/fi";

export default function TestimonialCard({ name, role, quote, rating, image }) {
  return (
    <div className="glass rounded-2xl p-8 shadow-card">
      <div className="flex items-center gap-3">
        <img src={image} alt={name} className="h-12 w-12 rounded-full object-cover" />
        <div>
          <p className="text-sm font-semibold text-matte">{name}</p>
          <p className="text-xs text-matte/60">{role}</p>
        </div>
      </div>
      <p className="mt-5 text-sm text-matte/70">"{quote}"</p>
      <div className="mt-4 flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <FiStar
            key={index}
            className={index < rating ? "text-accent" : "text-matte/20"}
          />
        ))}
      </div>
    </div>
  );
}
