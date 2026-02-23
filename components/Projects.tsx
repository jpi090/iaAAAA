import Image from "next/image";

const projects = [
  {
    image: "/scr/SCHOOL DEVELOPMENT.jpg",
    title: "School Development",
    description: "Building modern educational facilities to provide quality learning environments for African children.",
  },
  {
    image: "/scr/CLEAN WATER .jpg",
    title: "Clean Water Access",
    description: "Installing water systems to provide safe, clean drinking water to communities in need.",
  },
  {
    image: "/scr/AGRICULTURE.jpg",
    title: "Agricultural Programs",
    description: "Teaching sustainable farming techniques to ensure food security and economic growth.",
  },
  {
    image: "/scr/HEALTH CLINIC.jpg",
    title: "Healthcare Initiatives",
    description: "Establishing clinics and health programs to improve community wellness and medical access.",
  },
  {
    image: "/scr/EMPOWERING WOMEN .jpg",
    title: "Women Empowerment",
    description: "Supporting women through education, skills training, and entrepreneurship programs.",
  },
  {
    image: "/scr/FOOD SECURITY PROMOTION .jpg",
    title: "Food Security",
    description: "Promoting sustainable agriculture and nutrition programs to combat hunger.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming communities through sustainable development initiatives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card group overflow-hidden"
            >
              <div className="relative h-56 mb-4 rounded-xl overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
