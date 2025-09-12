"use client";

import SellerSidebar from "@/components/SellerSidebar";
import SellerTopbar from "@/components/SellerTopbar";
import Card from "@/components/Card"; // reuse from Super Admin

export default function SellerDashboard() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <SellerSidebar />

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 min-h-screen">
        <SellerTopbar />

        {/* Stats */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card title="Total Sales" value="₹85,000" icon="💰" />
          <Card title="Orders" value="120" icon="🛒" />
          <Card title="Products" value="25" icon="📦" />
          <Card title="Earnings" value="₹40,500" icon="💵" />
        </div>

        {/* Product List */}
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">📦 My Products</h2>
          <div className="bg-white shadow rounded-lg p-4">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="p-2">Product</th>
                  <th className="p-2">Price</th>
                  <th className="p-2">Stock</th>
                  <th className="p-2">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2">Classic T-Shirt</td>
                  <td className="p-2">₹499</td>
                  <td className="p-2">50</td>
                  <td className="p-2 text-green-600">Active</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Running Shoes</td>
                  <td className="p-2">₹2,499</td>
                  <td className="p-2">20</td>
                  <td className="p-2 text-green-600">Active</td>
                </tr>
                <tr>
                  <td className="p-2">Smart Watch</td>
                  <td className="p-2">₹3,999</td>
                  <td className="p-2">0</td>
                  <td className="p-2 text-red-600">Out of Stock</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">🛒 Recent Orders</h2>
          <div className="bg-white shadow rounded-lg p-4">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="p-2">Order ID</th>
                  <th className="p-2">Customer</th>
                  <th className="p-2">Amount</th>
                  <th className="p-2">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2">#201</td>
                  <td className="p-2">Ravi Kumar</td>
                  <td className="p-2">₹2,499</td>
                  <td className="p-2 text-green-600">Delivered</td>
                </tr>
                <tr>
                  <td className="p-2">#202</td>
                  <td className="p-2">Priya Sharma</td>
                  <td className="p-2">₹499</td>
                  <td className="p-2 text-yellow-600">Pending</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
