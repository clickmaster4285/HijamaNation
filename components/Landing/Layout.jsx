import Navbar from "./Navbar";
import Footer from "./Footer";
import Divider from "./Divider";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-black font-sans antialiased">
      <Navbar />
      <main className="pt-20">{children}</main>
      <Divider />
      <Footer />
    </div>
  );
}
