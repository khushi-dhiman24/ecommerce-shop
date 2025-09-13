"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [serverMessage, setServerMessage] = useState(""); // backend errors
    const router = useRouter();

    // Validate email as user types
    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) {
            setEmailError("Email is required");
        } else if (!emailRegex.test(value)) {
            setEmailError("Enter a valid email address");
        } else {
            setEmailError("");
        }
    };

    // Validate password as user types
    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);

        if (!value) {
            setPasswordError("Password is required");
        } else if (value.length < 6) {
            setPasswordError("Password must be at least 6 characters");
        } else {
            setPasswordError("");
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        // Final check before sending request
        if (emailError || passwordError || !email || !password) {
            setServerMessage("Please fix errors before submitting");
            return;
        }

        const res = await fetch("/api/admin/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        const data = await res.json();

        if (res.ok) {
            setServerMessage(""); 
            router.push("/super-Admin");
        } else {
            setServerMessage(data.message);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r">
            <form
                onSubmit={handleLogin}
                className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md border border-gray-200"
            >
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                    Admin Login
                </h2>

                <input
                    type="email"
                    placeholder="Email"
                    className="border border-gray-300 rounded-lg p-3 w-full mb-1 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    value={email}
                    onChange={handleEmailChange}
                />
                {emailError && (
                    <p className="text-red-500 text-sm mb-2">{emailError}</p>
                )}

                <input
                    type="password"
                    placeholder="Password"
                    className="border border-gray-300 rounded-lg p-3 w-full mb-1 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    value={password}
                    onChange={handlePasswordChange}
                />
                {passwordError && (
                    <p className="text-red-500 text-sm mb-2">{passwordError}</p>
                )}

                {serverMessage && (
                    <p className="text-red-600 text-sm mb-4">{serverMessage}</p>
                )}

                <button
                    type="submit"
                    className={`w-full ${
                        emailError || passwordError
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-blue-500 hover:bg-blue-600"
                    } text-white font-semibold py-3 rounded-lg shadow-md transition duration-300`}
                    disabled={!!emailError || !!passwordError}
                >
                    Login
                </button>
            </form>
        </div>
    );
}
