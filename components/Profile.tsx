import Image from "next/image";

export default function Profile() {
  return (
    <section id="vision" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-8 md:p-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Founder & President
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative w-80 h-80 mb-8 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/scr/DR ZYRA MCCLOUD.jpg"
                alt="Dr. Zyra McCloud"
                fill
                className="object-cover"
              />
            </div>

            <div className="max-w-4xl text-center">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Dr. Zyra McCloud
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>Dr. Zyra McCloud</strong> is a visionary leader, educator, and advocate 
                with over 55 years of experience in driving educational reform and global development. 
                As the founder and president of IAAAACAME, she has dedicated her career to fostering 
                partnerships, building schools, and advancing economic and healthcare initiatives 
                across Africa, Nigeria, and the West Africa region.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Recognized with numerous honors, Dr. McCloud continues to inspire change, influence 
                leaders, and improve lives globally through her unwavering commitment to education 
                and community development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
