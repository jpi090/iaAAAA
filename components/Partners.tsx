import Image from "next/image";

const partners = [
  {
    name: "Cal Clean Earth",
    description: "Environmental sustainability partner",
    logo: "/scr/THE GLOBE.jpg",
  },
  {
    name: "Ministry of Women Affairs",
    description: "Government partnership for women empowerment",
    logo: "/scr/MINISTER OF WOMEN AFFAIRS.jpg",
  },
  {
    name: "Agricultural Development",
    description: "Food security and farming initiatives",
    logo: "/scr/AGRICULTURE.jpg",
  },
];

export default function Partners() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Partners
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Working together with organizations that share our vision for a better Africa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="card text-center group"
            >
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {partner.name}
              </h3>
              <p className="text-gray-600">
                {partner.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Become a Partner
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Join us in making a lasting impact on African communities. 
              Together, we can achieve more.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-primary-light text-white font-semibold rounded-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
