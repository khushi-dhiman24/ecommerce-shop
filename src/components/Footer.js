"use client";

import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Ecommerce */}
        <div>
          <h3 className="text-xl font-bold mb-4">Ecommerce</h3>
          <p>Your one-stop shop for trendy fashion, electronics, and accessories. Enjoy exclusive deals and top-quality products.</p>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-xl font-bold mb-4">Categories</h3>
          <ul>
            <li className="mb-2 hover:text-gray-300 cursor-pointer">Clothing</li>
            <li className="mb-2 hover:text-gray-300 cursor-pointer">Shoes</li>
            <li className="mb-2 hover:text-gray-300 cursor-pointer">Electronics</li>
            <li className="mb-2 hover:text-gray-300 cursor-pointer">Accessories</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2 hover:text-gray-300 cursor-pointer">About Us</li>
            <li className="mb-2 hover:text-gray-300 cursor-pointer">Terms & Conditions</li>
            <li className="mb-2 hover:text-gray-300 cursor-pointer">Privacy Policy</li>
            <li className="mb-2 hover:text-gray-300 cursor-pointer">FAQs</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p>Email: support@ecommerce.com</p>
          <p>Phone: +1 234 567 890</p>
          <div className="flex mt-4 space-x-3 text-white">
            <FaFacebookF className="cursor-pointer hover:text-blue-500" />
            <FaInstagram className="cursor-pointer hover:text-pink-500" />
            <FaTwitter className="cursor-pointer hover:text-blue-400" />
            <FaLinkedin className="cursor-pointer hover:text-blue-600" />
          </div>
        </div>

      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400">
        © {new Date().getFullYear()} Ecommerce. All rights reserved.
      </div>
    </footer>
  );
}
