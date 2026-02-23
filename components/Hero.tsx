"use client";

import Image from "next/image";
import Link from "next/link";
import { FaPlay, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="relative min-h-[700px] overflow-hidden mt-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/scr/POOR AFRICAN CHILDREN .jpg"
          alt="African Children"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-32">
        <div className="max-w-3xl">
          {/* Subtitle */}
          <p className="text-white/90 text-lg mb-4 font-medium">
            One Team One Mission
          </p>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Give The Child The Gift Of Education.
          </h1>

          {/* Description */}
          <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl">
            Empowering African communities through education, sustainable development, 
            and creating lasting opportunities for the next generation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <Link
              href="/contact"
              className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              Donate Now
            </Link>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold rounded-full transition-all duration-300 flex items-center gap-3 border border-white/30">
              <FaPlay className="text-sm" />
              Watch Video
            </button>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 flex items-center justify-center text-white transition-all duration-300 border border-white/30"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 flex items-center justify-center text-white transition-all duration-300 border border-white/30"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 flex items-center justify-center text-white transition-all duration-300 border border-white/30"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 flex items-center justify-center text-white transition-all duration-300 border border-white/30"
            >
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </div>
  );
}
