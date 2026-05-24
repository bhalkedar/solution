import { useEffect, useState } from "react";
import { useInView } from "framer-motion";

export const useCountUp = (ref, end, duration = 1200) => {
  const [value, setValue] = useState(0);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  useEffect(() => {
    if (!inView) return;
    let start;
    let rafId;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setValue(Math.floor(progress * end));
      if (progress < 1) rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [inView, end, duration]);

  return value;
};
