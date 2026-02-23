import Link from "next/link";

export default function WelcomeSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-8 md:p-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Welcome to IAAAACAME
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 max-w-4xl mx-auto">
            The International Association of African American Ambassadors to Africa (IAAAACAME) 
            is dedicated to fostering unity, education, and sustainable development across African 
            communities. Through strategic partnerships and grassroots initiatives, we empower 
            individuals and transform lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="btn-primary"
            >
              Learn More About Us
            </Link>
            <Link
              href="/contact"
              className="btn-secondary"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
