const milestones = [
  {
    year: "1970",
    title: "Foundation",
    description: "Dr. Zyra McCloud begins her journey in educational reform and community development.",
  },
  {
    year: "1985",
    title: "First School Built",
    description: "Established our first educational facility in Nigeria, serving 200 students.",
  },
  {
    year: "2000",
    title: "IAAAACAME Founded",
    description: "Official establishment of the International Association of African American Ambassadors to Africa.",
  },
  {
    year: "2010",
    title: "Expansion to West Africa",
    description: "Extended operations to Ghana, Senegal, and other West African nations.",
  },
  {
    year: "2015",
    title: "Clean Water Initiative",
    description: "Launched major clean water projects, providing safe water to 50+ communities.",
  },
  {
    year: "2020",
    title: "Healthcare Programs",
    description: "Established healthcare clinics and medical outreach programs.",
  },
  {
    year: "2025",
    title: "Continued Growth",
    description: "Serving 100+ communities with 5,000+ students educated and ongoing projects.",
  },
];

export default function Timeline() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Journey
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600">
            Over 50 years of dedication to African communities
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 hidden md:block"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className="flex-1 md:text-right md:pr-8 md:pl-0 md:even:text-left md:even:pl-8 md:even:pr-0">
                  <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="relative flex-shrink-0 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg z-10 hidden md:block"></div>

                {/* Spacer */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
