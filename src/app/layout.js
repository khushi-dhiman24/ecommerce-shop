// src/app/layout.js
import "./globals.css";
import Navbar from "../components/Navbar"; // ✅ default import
import Footer from "../components/Footer";

export const metadata = {
  title: "E-Shop",
  description: "A small e-commerce shop built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar /> {/* ✅ now valid */}
        <main className="container mx-auto px-4 py-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
