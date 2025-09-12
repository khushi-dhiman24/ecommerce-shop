"use client";

import CartItem from "@/components/CartItem";

const cartItems = [
  { id: 1, name: "Summer T-Shirt", price: 20, image: "/images/tshirt.jpg", quantity: 2 },
  { id: 2, name: "Running Shoes", price: 50, image: "/images/shoes.jpg", quantity: 1 },
];

export default function CartPage() {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6">🛒 Your Cart</h1>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow flex justify-between items-center">
        <h2 className="text-xl font-semibold">Total: ${total}</h2>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow">
          Checkout
        </button>
      </div>
    </div>
  );
}
