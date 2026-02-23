"use client";

import { useState, useEffect, useRef } from "react";

const stats = [
  {
    icon: "🎓",
    number: 5000,
    label: "Students Educated",
    description: "Providing quality education to thousands of children",
  },
  {
    icon: "🏫",
    number: 25,
    label: "Schools Built",
    description: "Modern educational facilities across Africa",
  },
  {
    icon: "💧",
    number: 50,
    label: "Clean Water Projects",
    description: "Bringing safe water to communities in need",
  },
  {
    icon: "🌍",
    number: 100,
    label: "Communities Impacted",
    description: "Transforming lives across the continent",
  },
];

export default function ImpactCounter() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat, index) => {
      let currentStep = 0;
      const increment = stat.number / steps;

      const timer = setInterval(() => {
        currentStep++;
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = Math.min(
            Math.round(increment * currentStep),
            stat.number
          );
          return newCounts;
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-r from-primary to-primary-light relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Impact in Numbers
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-white/90">
            Making a real difference in African communities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{stat.icon}</div>
              <div className="text-5xl font-bold text-white mb-2">
                {counts[index].toLocaleString()}+
              </div>
              <div className="text-xl font-semibold text-white mb-2">
                {stat.label}
              </div>
              <p className="text-white/80 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
