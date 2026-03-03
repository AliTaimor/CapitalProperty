"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 9, suffix: "+", label: "Flagship Projects" },
  { value: 50000, suffix: "+", label: "Happy Families" },
  { value: 500, suffix: " Acres+", label: "Land Developed" },
];

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 2000;
          const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            setCount(Math.floor(progress * value));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="bg-[#0D3D2A] py-16 relative overflow-hidden">
      {/* Decorative */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #C9A96E 0px, #C9A96E 1px, transparent 1px, transparent 40px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center ${i < 3 ? "md:border-r border-[#C9A96E]/20" : ""}`}
            >
              <div className="font-display text-4xl md:text-5xl font-semibold text-[#C9A96E] mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-white/50 text-xs uppercase tracking-[0.2em]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
