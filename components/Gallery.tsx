"use client";

import { useState } from "react";
import Image from "next/image";
import { HiX } from "react-icons/hi";

const images = [
  { src: "/scr/SCHOOL DEVELOPMENT.jpg", title: "School Development", category: "Education", type: "image" },
  { src: "/scr/CLEAN WATER .jpg", title: "Clean Water Project", category: "Water", type: "image" },
  { src: "/scr/AGRICULTURE.jpg", title: "Agricultural Training", category: "Agriculture", type: "image" },
  { src: "/scr/HEALTH CLINIC.jpg", title: "Healthcare Clinic", category: "Healthcare", type: "image" },
  { src: "/scr/EMPOWERING WOMEN .jpg", title: "Women Empowerment", category: "Empowerment", type: "image" },
  { src: "/scr/FOOD SECURITY PROMOTION .jpg", title: "Food Security", category: "Agriculture", type: "image" },
  { src: "/scr/POOR AFRICAN CHILDREN .jpg", title: "Children Support", category: "Education", type: "image" },
  { src: "/scr/DEVELOPING COMMUNITIES .jpg", title: "Community Development", category: "Development", type: "image" },
  { src: "/scr/school.jpg", title: "School Building", category: "Education", type: "image" },
  { src: "/scr/nigeria-visit-1.jpg", title: "Nigeria Visit 2024", category: "Visit", type: "image" },
  { src: "/scr/nigeria-visit-2.jpg", title: "Community Engagement Nigeria", category: "Visit", type: "image" },
  { src: "/scr/nigeria-visit-3.jpg", title: "IAAAACAME Nigeria Mission", category: "Visit", type: "image" },
  { src: "/scr/iccam in gana.mp4", title: "IAAAACAME in Ghana", category: "Visit", type: "video" },
  { src: "/scr/WhatsApp Image 2026-02-03 at 7.48.07 PM.jpeg", title: "IAAAACAME Vision: Building Tomorrow's Leaders", category: "Vision", type: "image" },
  { src: "/scr/WhatsApp Image 2026-02-03 at 7.48.08 PM.jpeg", title: "IAAAACAME Vision: Empowering Communities", category: "Vision", type: "image" },
  { src: "/scr/WhatsApp Image 2026-02-03 at 7.48.09 PM.jpeg", title: "IAAAACAME Vision: Transforming Lives", category: "Vision", type: "image" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...Array.from(new Set(images.map(img => img.category)))];
  
  const filteredImages = filter === "All" 
    ? images 
    : images.filter(img => img.category === filter);

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Work in Action
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600">
            See the impact of our projects across African communities
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? "bg-primary text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(index)}
              className="relative h-64 rounded-2xl overflow-hidden cursor-pointer group"
            >
              {image.type === "video" ? (
                <video
                  src={image.src}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                />
              ) : (
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-1">{image.title}</h3>
                  <p className="text-sm text-white/80">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all"
            >
              <HiX className="text-3xl" />
            </button>
            <div className="relative max-w-5xl w-full h-[80vh]">
              {filteredImages[selectedImage].type === "video" ? (
                <video
                  src={filteredImages[selectedImage].src}
                  controls
                  className="w-full h-full object-contain"
                  onClick={(e) => e.stopPropagation()}
                />
              ) : (
                <Image
                  src={filteredImages[selectedImage].src}
                  alt={filteredImages[selectedImage].title}
                  fill
                  className="object-contain"
                />
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">
                  {filteredImages[selectedImage].title}
                </h3>
                <p className="text-white/80">
                  {filteredImages[selectedImage].category}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
