"use client";

export default function SellerTopbar() {
  return (
    <div className="w-full bg-white shadow-md p-4 flex justify-between items-center">
      <h2 className="text-xl font-semibold">Seller Dashboard</h2>
      <div className="flex items-center space-x-4">
        <span className="text-gray-600">Hello, Seller 👋</span>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600">
          Logout
        </button>
      </div>
    </div>
  );
}
