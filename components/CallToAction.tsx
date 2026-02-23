import Link from "next/link";
import { HiHeart, HiUserGroup, HiCash } from "react-icons/hi";

const actions = [
  {
    icon: HiHeart,
    title: "Volunteer",
    description: "Join our team and make a direct impact in communities",
    link: "/contact",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: HiCash,
    title: "Donate",
    description: "Support our projects and help us reach more communities",
    link: "/contact",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: HiUserGroup,
    title: "Partner",
    description: "Collaborate with us to amplify our collective impact",
    link: "/contact",
    color: "from-blue-500 to-cyan-500",
  },
];

export default function CallToAction() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Get Involved Today
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            There are many ways you can contribute to our mission of empowering 
            African communities. Choose the path that resonates with you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {actions.map((action, index) => (
            <Link
              key={index}
              href={action.link}
              className="group"
            >
              <div className="card h-full text-center hover:scale-105 transition-transform duration-300">
                <div className={`inline-flex p-6 bg-gradient-to-br ${action.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <action.icon className="text-5xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {action.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {action.description}
                </p>
                <span className="inline-block text-primary font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  Learn More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
