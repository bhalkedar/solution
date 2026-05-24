import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-matte overflow-hidden">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
