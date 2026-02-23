import Gallery from "@/components/Gallery";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata = {
  title: "Gallery - IAAAACAME",
  description: "View our projects and impact across African communities through photos",
};

export default function GalleryPage() {
  return (
    <div className="pt-16">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-primary to-primary-light text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Photo Gallery
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Witness the transformation happening in African communities
          </p>
        </div>
      </div>

      <Gallery />
      <ScrollToTop />
    </div>
  );
}
