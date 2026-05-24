export default function ProcessStep({ index, title, description, icon: Icon }) {
  return (
    <div className="relative rounded-2xl border border-lightgray bg-white p-6 shadow-card">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent">
          <Icon className="text-lg" />
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-matte/40">
            Step {index + 1}
          </p>
          <h3 className="text-base font-semibold text-matte">{title}</h3>
        </div>
      </div>
      <p className="mt-3 text-sm text-matte/70">{description}</p>
    </div>
  );
}
