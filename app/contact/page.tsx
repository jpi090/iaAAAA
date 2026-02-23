"use client";

import { useState } from "react";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import ScrollToTop from "@/components/ScrollToTop";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setTimeout(() => setShowSuccess(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-16">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-primary to-primary-light text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Get in touch with IAAAACAME to learn more about our mission
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              We&apos;d Love to Hear From You
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you want to volunteer, donate, partner with us, or simply learn more 
              about our work in African communities, we&apos;re here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="card">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <HiMail className="text-primary text-3xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      Email Us
                    </h3>
                    <p className="text-gray-600 mb-2">
                      For general inquiries and information:
                    </p>
                    <a
                      href="mailto:info@iaaaacame.org"
                      className="text-primary hover:text-primary-light font-semibold"
                    >
                      info@iaaaacame.org
                    </a>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <HiPhone className="text-primary text-3xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      Call Us
                    </h3>
                    <p className="text-gray-600 mb-2">USA Office:</p>
                    <a
                      href="tel:+13053064567"
                      className="text-primary hover:text-primary-light font-semibold block mb-3"
                    >
                      +1 (305) 306-4567
                    </a>
                    <p className="text-gray-600 mb-2">Nigeria Office:</p>
                    <a
                      href="tel:+2348012345678"
                      className="text-primary hover:text-primary-light font-semibold block"
                    >
                      +234 (801) 234-5678
                    </a>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <HiLocationMarker className="text-primary text-3xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      Visit Our Offices
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold text-gray-800">USA Headquarters:</p>
                        <p className="text-gray-600">
                          Miami, Florida<br />
                          United States
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Nigeria Operations:</p>
                        <p className="text-gray-600">
                          Abuja, Federal Capital Territory<br />
                          Nigeria
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Donate Section */}
              <div className="bg-gradient-to-r from-primary to-primary-light text-white rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">💝 Support Our Mission</h3>
                <p className="mb-6 opacity-90">
                  Your donation helps us build schools, provide clean water, and transform 
                  communities across Africa.
                </p>
                <button
                  onClick={() =>
                    alert("Donation portal coming soon! Please contact us via email for donation information.")
                  }
                  className="px-8 py-3 bg-white text-primary font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-xl"
                >
                  Donate Now
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Send us a Message
              </h3>

              {showSuccess && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6">
                  ✓ Thank you for your message! We&apos;ll get back to you within 24-48 hours.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Our Global Presence
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="text-5xl mb-4">🇺🇸</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                United States
              </h3>
              <p className="text-gray-600">
                Coordinating diaspora engagement and fundraising efforts for African 
                development projects.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-5xl mb-4">🇳🇬</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Nigeria
              </h3>
              <p className="text-gray-600">
                Managing on-ground operations, school construction, and community 
                development initiatives.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                West Africa Region
              </h3>
              <p className="text-gray-600">
                Expanding our reach to Ghana, Senegal, and other West African nations 
                for broader impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top */}
      <ScrollToTop />
    </div>
  );
}
