import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";

export default function PublicLayout({ children }) {
  return (
    <>
      <ScrollProgressBar />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
