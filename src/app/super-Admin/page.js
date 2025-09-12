"use client";

import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import Card from "@/components/Card";

export default function SuperAdminPage() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 min-h-screen">
        <Topbar />

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card title="Total Sales" value="₹1,20,000" icon="💰" />
          <Card title="Orders" value="350" icon="🛒" />
          <Card title="Products" value="85" icon="📦" />
          <Card title="Users" value="1,245" icon="👥" />
        </div>

        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
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
                  <td className="p-2">#101</td>
                  <td className="p-2">Ravi Kumar</td>
                  <td className="p-2">₹2,499</td>
                  <td className="p-2 text-green-600">Delivered</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">#102</td>
                  <td className="p-2">Priya Sharma</td>
                  <td className="p-2">₹1,299</td>
                  <td className="p-2 text-yellow-600">Pending</td>
                </tr>
                <tr>
                  <td className="p-2">#103</td>
                  <td className="p-2">Aman Gupta</td>
                  <td className="p-2">₹3,999</td>
                  <td className="p-2 text-red-600">Cancelled</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
