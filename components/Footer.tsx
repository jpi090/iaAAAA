import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">IAAAACAME</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              International Association of African American Ambassadors to Africa. 
              Empowering communities, building bridges, and creating lasting change 
              across the African continent.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="text-white/80 hover:text-white transition-colors">
                  Our Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-white/80">
              <li>📧 info@iaaaacame.org</li>
              <li>📞 +1 (305) 306-4567</li>
              <li>🏢 Miami, Florida, USA</li>
              <li>🌍 Abuja, Nigeria</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/80">
            &copy; {new Date().getFullYear()} IAAAACAME - All Rights Reserved
          </p>
          <p className="text-white/60 mt-2">
            Empowering Communities • Building Bridges • Creating Change
          </p>
        </div>
      </div>
    </footer>
  );
}
