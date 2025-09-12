"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // router hook for navigation

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      // login successful → redirect to super-admin page
      router.push("/super-Admin");
    } else {
      alert(data.message);
    }
  };

  return (
<div className="flex justify-center items-center min-h-screen bg-gradient-to-r">
  <form 
    onSubmit={handleLogin} 
    className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md border border-gray-200"
  >
    <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Admin Login</h2>

    <input
      type="email"
      placeholder="Email"
      className="border border-gray-300 rounded-lg p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />

    <input
      type="password"
      placeholder="Password"
      className="border border-gray-300 rounded-lg p-3 w-full mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />

    <button 
      type="submit" 
      className="w-full bg-gradient-to-r bg-blue-500  text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
    >
      Login
    </button>
  </form>
</div>

  );
}
