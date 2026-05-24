import { useRef } from "react";
import { useCountUp } from "../hooks/useCountUp.js";

export default function StatCard({ value, label, suffix = "" }) {
  const ref = useRef(null);
  const count = useCountUp(ref, value);

  return (
    <div ref={ref} className="glass rounded-2xl px-6 py-5 text-left">
      <div className="text-2xl font-semibold text-matte">
        {count}
        {suffix}
      </div>
      <p className="mt-1 text-sm text-matte/60">{label}</p>
    </div>
  );
}
