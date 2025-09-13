"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminNavbar() {
  const router = useRouter();

  const handleLogout = () => {
    // If you store auth tokens in localStorage/cookies, clear them
    localStorage.removeItem("adminLoggedIn");
    router.push("/admin"); // redirect to admin login page
  };

  return (
    <nav className="bg-gray-900 text-white shadow-md h-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Left: Logo */}
        <div
          className="flex-shrink-0 cursor-pointer text-xl font-bold"
          onClick={() => router.push("/super-admin")}
        >
          Admin Panel
        </div>

        {/* Right: Links + Logout */}
        <div className="flex items-center space-x-4">
          <Link href="/super-admin">
            <span className="hover:bg-gray-700 px-3 py-2 rounded-md cursor-pointer transition">
              Dashboard
            </span>
          </Link>
          <Link href="/super-admin/users">
            <span className="hover:bg-gray-700 px-3 py-2 rounded-md cursor-pointer transition">
              Users
            </span>
          </Link>
          <Link href="/super-admin/products">
            <span className="hover:bg-gray-700 px-3 py-2 rounded-md cursor-pointer transition">
              Products
            </span>
          </Link>

          {/* 🔹 Logout button */}
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 px-3 py-2 rounded-md transition"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
