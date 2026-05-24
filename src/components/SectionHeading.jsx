export default function SectionHeading({ eyebrow, title, subtitle, align = "left" }) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent/80">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-semibold text-matte md:text-4xl">{title}</h2>
      {subtitle && <p className="max-w-2xl text-sm text-matte/70 md:text-base">{subtitle}</p>}
    </div>
  );
}
