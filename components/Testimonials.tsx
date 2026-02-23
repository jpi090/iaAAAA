"use client";

import { useState } from "react";
import Image from "next/image";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const testimonials = [
  {
    name: "Amina Johnson",
    role: "Community Leader, Lagos",
    image: "/scr/hands.jpg",
    quote: "IAAAACAME has transformed our community. The school they built has given our children hope and a brighter future. We are forever grateful.",
  },
  {
    name: "Dr. Kenneth Obi",
    role: "Healthcare Director",
    image: "/scr/dr_kens.jpg",
    quote: "The healthcare initiatives have saved countless lives. Their commitment to sustainable development is truly inspiring.",
  },
  {
    name: "Sarah Williams",
    role: "Volunteer Coordinator",
    image: "/scr/hands.jpg",
    quote: "Working with IAAAACAME has been life-changing. Seeing the impact of our work firsthand motivates me every day.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Voices of Impact
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600">
            Hear from those whose lives have been touched by our work
          </p>
        </div>

        <div className="relative">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-xl flex-shrink-0">
                <Image
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="text-6xl text-primary/20 mb-4">&quot;</div>
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6 italic">
                  {testimonials[current].quote}
                </p>
                <div>
                  <h4 className="text-2xl font-bold text-gray-800">
                    {testimonials[current].name}
                  </h4>
                  <p className="text-primary font-medium">
                    {testimonials[current].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={prev}
                className="p-3 bg-primary/10 hover:bg-primary/20 rounded-full transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <HiChevronLeft className="text-2xl text-primary" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === current
                        ? "bg-primary w-8"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 bg-primary/10 hover:bg-primary/20 rounded-full transition-all duration-300"
                aria-label="Next testimonial"
              >
                <HiChevronRight className="text-2xl text-primary" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
