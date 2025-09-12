"use client";

import { useState } from "react";

export default function PaymentPage() {
  const [method, setMethod] = useState("card");

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center px-6 py-12">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg grid md:grid-cols-2">
        
        {/* Order Summary */}
        <div className="p-8 border-r">
          <h2 className="text-2xl font-bold mb-6">🛒 Order Summary</h2>
          <ul className="space-y-4">
            <li className="flex justify-between">
              <span>Classic T-Shirt</span>
              <span>₹499</span>
            </li>
            <li className="flex justify-between">
              <span>Running Shoes</span>
              <span>₹2,499</span>
            </li>
            <li className="flex justify-between font-semibold text-lg border-t pt-2">
              <span>Total</span>
              <span>₹2,998</span>
            </li>
          </ul>
        </div>

        {/* Payment Form */}
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-6">💳 Payment</h2>

          {/* Payment Method Selection */}
          <div className="space-y-3 mb-6">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="method"
                checked={method === "card"}
                onChange={() => setMethod("card")}
              />
              <span>Credit / Debit Card</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="method"
                checked={method === "upi"}
                onChange={() => setMethod("upi")}
              />
              <span>UPI</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="method"
                checked={method === "cod"}
                onChange={() => setMethod("cod")}
              />
              <span>Cash on Delivery</span>
            </label>
          </div>

          {/* Conditional Inputs */}
          {method === "card" && (
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Card Number"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-1/2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="w-1/2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <input
                type="text"
                placeholder="Card Holder Name"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          )}

          {method === "upi" && (
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Enter UPI ID (e.g. name@upi)"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          )}

          {method === "cod" && (
            <p className="text-gray-600 mb-4">
              💵 Pay with cash once your order is delivered.
            </p>
          )}

          {/* Pay Button */}
          <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
            {method === "cod" ? "Place Order" : "Pay Now"}
          </button>
        </div>
      </div>
    </div>
  );
}
