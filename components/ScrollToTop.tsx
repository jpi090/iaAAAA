"use client";

import { useState, useEffect } from "react";
import { HiArrowUp } from "react-icons/hi";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-primary to-primary-light text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1 group"
          aria-label="Scroll to top"
        >
          <HiArrowUp className="text-2xl group-hover:animate-bounce" />
        </button>
      )}
    </>
  );
}
