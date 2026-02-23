"use client";

import { useState } from "react";
import { HiMail } from "react-icons/hi";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary to-primary-light">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/20 rounded-full">
              <HiMail className="text-5xl text-white" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Stay Connected
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for updates on our projects, success stories, 
            and ways you can make a difference in African communities.
          </p>

          {status === "success" && (
            <div className="bg-green-500 text-white px-6 py-3 rounded-lg mb-6 animate-fade-in-up">
              ✓ Thank you for subscribing! Check your email for confirmation.
            </div>
          )}

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-white/50 transition-all"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </form>

          <p className="text-white/70 text-sm mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
