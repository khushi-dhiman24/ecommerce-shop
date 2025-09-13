"use client";
import Link from "next/link";
import { useState } from "react";

export default function AdminFooter() {
  const [year] = useState(new Date().getFullYear());

  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-8 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Side */}
        <p className="text-sm mb-3 md:mb-0">
          © {year} Admin Panel. All rights reserved.
        </p>

        {/* Right Side: Quick Links */}
        <div className="flex space-x-6 text-sm">
          
          <Link
            href="/super-admin/settings"
            className="hover:text-white transition-colors"
          >
            Settings
          </Link>
          <Link
            href="/super-admin/help"
            className="hover:text-white transition-colors"
          >
            Help
          </Link>
        </div>
      </div>
    </footer>
  );
}
