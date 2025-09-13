"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Users, ShoppingBag, Store, Settings } from "lucide-react";
import AdminFooter from "../../components/AdminFooter";
import AdminNavbar from "../../components/Adminnavbar";
export default function SuperAdminPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <AdminNavbar/>
      {/* Title */}
      

      {/* Grid for stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-15 mt-10 h-20">
        <Card className="shadow-md rounded-2xl p-4 bg-white">
          <CardContent className="flex items-center space-x-4">
            <Users className="w-10 h-10 text-blue-600" />
            <div>
              <h2 className="text-lg font-semibold">Users</h2>
              <p className="text-gray-600">1,245</p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md rounded-2xl p-4 bg-white">
          <CardContent className="flex items-center space-x-4">
            <Store className="w-10 h-10 text-green-600" />
            <div>
              <h2 className="text-lg font-semibold">Sellers</h2>
              <p className="text-gray-600">78</p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md rounded-2xl p-4 bg-white">
          <CardContent className="flex items-center space-x-4">
            <ShoppingBag className="w-10 h-10 text-purple-600" />
            <div>
              <h2 className="text-lg font-semibold">Products</h2>
              <p className="text-gray-600">3,482</p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md rounded-2xl p-4 bg-white">
          <CardContent className="flex items-center space-x-4">
            <Settings className="w-10 h-10 text-orange-600" />
            <div>
              <h2 className="text-lg font-semibold">Settings</h2>
              <p className="text-gray-600">Manage</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Table section */}
      <div className="bg-white shadow-md rounded-2xl p-6 pt-10">
        <h2 className="text-2xl font-semibold mb-4">Recent Activities</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-3">ID</th>
              <th className="p-3">User</th>
              <th className="p-3">Action</th>
              <th className="p-3">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-3">001</td>
              <td className="p-3">John Doe</td>
              <td className="p-3 text-green-600">Added Product</td>
              <td className="p-3">12 Sep 2025</td>
            </tr>
            <tr className="border-b">
              <td className="p-3">002</td>
              <td className="p-3">Jane Smith</td>
              <td className="p-3 text-red-600">Deleted User</td>
              <td className="p-3">11 Sep 2025</td>
            </tr>
            <tr>
              <td className="p-3">003</td>
              <td className="p-3">Seller XYZ</td>
              <td className="p-3 text-blue-600">Updated Settings</td>
              <td className="p-3">10 Sep 2025</td>
            </tr>
          </tbody>
        </table>
      </div>
      <AdminFooter/>
    </div>
  );
}
