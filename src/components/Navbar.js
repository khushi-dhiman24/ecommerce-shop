"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      {/* Logo */}
      <Link href="/" className="text-xl font-bold">
        E-Shop
      </Link>

      {/* Links */}
      <div className="flex items-center space-x-6">
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/contact">Contact</Link>

        {/* Cart */}
        <Link href="/cart" className="relative">
          <ShoppingCart className="w-6 h-6" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white px-1.5 py-0.5 rounded-full">
            3
          </span>
        </Link>

        {/* Login Button */}
        <Link
          href="/admin"
          className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
