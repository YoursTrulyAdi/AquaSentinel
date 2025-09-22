import React from "react";

const Admin = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      {/* Pending Reports */}
      <div className="bg-white shadow rounded-xl p-4 mb-6">
        <h2 className="text-lg font-semibold mb-2">Pending Reports</h2>
        <table className="w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Report</th>
              <th className="p-2 border">User</th>
              <th className="p-2 border">Date</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">Flood in Kochi</td>
              <td className="p-2 border">John Doe</td>
              <td className="p-2 border">21 Sep 2025</td>
              <td className="p-2 border text-yellow-600">Pending</td>
              <td className="p-2 border">
                <button className="px-3 py-1 bg-green-600 text-white rounded mr-2">Approve</button>
                <button className="px-3 py-1 bg-red-600 text-white rounded">Reject</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Verified Reports */}
      <div className="bg-white shadow rounded-xl p-4 mb-6">
        <h2 className="text-lg font-semibold mb-2">Verified Reports</h2>
        <ul className="list-disc pl-6">
          <li>🌊 Cyclone alert in Odisha - 20 Sep 2025</li>
        </ul>
      </div>

      {/* User Management */}
      <div className="bg-white shadow rounded-xl p-4 mb-6">
        <h2 className="text-lg font-semibold mb-2">User Management</h2>
        <p>Total Users: 120</p>
        <p>Top Contributor: Jane Smith (12 verified reports)</p>
      </div>

      {/* Analytics */}
      <div className="bg-white shadow rounded-xl p-4">
        <h2 className="text-lg font-semibold mb-2">System Analytics</h2>
        <p>📊 Total Reports Today: 24</p>
        <p>✅ Verified: 18 | ❌ Fake: 3 | ⏳ Pending: 3</p>
      </div>
    </div>
  );
};

export default Admin;
