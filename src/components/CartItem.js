"use client";

import Image from "next/image";

export default function CartItem({ item }) {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
      <div className="flex items-center space-x-4">
        <Image
          src={item.image}
          alt={item.name}
          width={60}
          height={60}
          className="rounded"
        />
        <div>
          <h2 className="font-semibold">{item.name}</h2>
          <p className="text-gray-600">${item.price} × {item.quantity}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <button className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">-</button>
          <span className="px-3">{item.quantity}</span>
          <button className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">+</button>
        </div>
        <p className="font-bold text-lg">${item.price * item.quantity}</p>
      </div>
    </div>
  );
}
