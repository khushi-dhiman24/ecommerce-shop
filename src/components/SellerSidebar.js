"use client";

import Link from "next/link";

export default function SellerSidebar() {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-6 flex flex-col">
      <h1 className="text-2xl font-bold mb-10">Seller Panel</h1>
      <nav className="space-y-4">
        <Link href="/seller" className="block hover:text-yellow-400">📊 Dashboard</Link>
        <Link href="/seller/products" className="block hover:text-yellow-400">📦 My Products</Link>
        <Link href="/seller/orders" className="block hover:text-yellow-400">🛒 Orders</Link>
        <Link href="/seller/earnings" className="block hover:text-yellow-400">💰 Earnings</Link>
        <Link href="/seller/settings" className="block hover:text-yellow-400">⚙️ Settings</Link>
      </nav>
    </div>
  );
}
