"use client";

export default function Card({ title, value, icon }) {
  return (
    <div className="bg-white shadow rounded-xl p-6 flex flex-col items-start justify-center">
      <div className="text-3xl mb-2">{icon}</div>
      <h3 className="text-gray-600 text-sm">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}
