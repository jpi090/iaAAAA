import Image from "next/image";
import Partners from "@/components/Partners";
import FAQ from "@/components/FAQ";
import ScrollToTop from "@/components/ScrollToTop";
import Timeline from "@/components/Timeline";

const directors = [
  {
    image: "/scr/DR ZYRA MCCLOUD HEAD OF THE ORGANIZATION.jpg",
    name: "Dr. Zyra McCloud",
    role: "CEO of IAAAACAME - Head of the organization",
  },
  {
    image: "/scr/MINISTER OF WOMEN AFFAIRS.jpg",
    name: "Mrs. Tallen Paulina",
    role: "Minister of Women Affairs",
  },
  {
    image: "/scr/GOVERNOR DARIYE.jpg",
    name: "Senator Joshua Dariye",
    role: "Senator of the House of Representatives",
  },
  {
    image: "/scr/boardmenber-linder.jpeg",
    name: "Dr. Mrs. Linda Suleiman",
    role: "Board Member",
  },
  {
    image: "/scr/boardmembedramy.jpeg",
    name: "Dr. Mrs. Amy McKenzie",
    role: "Board Member",
  },
];

const heroes = [
  {
    image: "/scr/NELSON.webp",
    name: "Nelson Mandela",
    description: "Iconic leader who fought for freedom and equality in South Africa. His legacy of forgiveness and reconciliation continues to inspire our work.",
  },
  {
    image: "/scr/KWAME NKRUMAH.jpg",
    name: "Kwame Nkrumah",
    description: "First Prime Minister & President of Ghana, Pan-African visionary who championed African independence and unity.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-primary to-primary-light text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            About IAAAACAME
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Learn about our mission, leadership, and the heroes who inspire us
          </p>
        </div>
      </div>

      {/* Vision Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-16">
            <h2 className="text-4xl font-bold text-primary mb-8">
              Vision, Goals, Objectives & Collaboration
            </h2>
            <div className="w-20 h-1 bg-primary mb-8 rounded-full"></div>

            <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Vision</h3>
                <p>
                  IAAAACAME envisions a united Africa and Diaspora, working hand-in-hand to achieve 
                  sustainable economic growth, quality education, healthcare access, and social justice.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Goals</h3>
                <p>
                  To rebuild Nigeria and Africa by reconnecting with African Americans, fostering youth 
                  empowerment, and creating sustainable opportunities in ministry, agriculture, technology, 
                  and trade.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Objectives</h3>
                <p>
                  We are committed to transforming lives and communities through sustainable initiatives 
                  that go beyond meeting basic needs. Our vision is to provide access to decent and 
                  affordable housing, create meaningful job opportunities, and empower young, innovative 
                  individuals with entrepreneurship training and digital skills to thrive in the future 
                  of work.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Collaboration</h3>
                <p>
                  IAAAACAME partners with global and local organizations to advance solar energy, waste 
                  management, housing, import/export, and capacity building. Together with institutions 
                  like Cal Clean Earth (CCE), we foster green development while uplifting vulnerable 
                  communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Board of Directors
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600">Past • Present • Future</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {directors.map((director, index) => (
              <div key={index} className="card text-center">
                <div className="relative h-64 mb-6 rounded-xl overflow-hidden">
                  <Image
                    src={director.image}
                    alt={director.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {director.name}
                </h3>
                <p className="text-gray-600">{director.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* African Heroes */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              African Heroes Who Inspire Us
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {heroes.map((hero, index) => (
              <div key={index} className="card">
                <div className="relative h-80 mb-6 rounded-xl overflow-hidden">
                  <Image
                    src={hero.image}
                    alt={hero.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {hero.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {hero.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <Timeline />

      {/* Partners Section */}
      <Partners />

      {/* FAQ Section */}
      <FAQ />

      {/* Scroll to Top */}
      <ScrollToTop />
    </div>
  );
}
