import React from "react";

const Profile = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>

      {/* Personal Info */}
      <div className="bg-white shadow rounded-xl p-4 mb-6">
        <h2 className="text-lg font-semibold mb-2">Personal Information</h2>
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> john@example.com</p>
        <p><strong>Phone:</strong> +91-9876543210</p>
        <p><strong>Location:</strong> Kochi, Kerala</p>
        <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Edit Profile
        </button>
      </div>

      {/* Submitted Reports */}
      <div className="bg-white shadow rounded-xl p-4 mb-6">
        <h2 className="text-lg font-semibold mb-2">My Reports</h2>
        <ul className="list-disc pl-6">
          <li>🌊 Flood in Kochi - 21 Sep 2025 - <span className="text-green-600">✅ Verified</span></li>
          <li>🌊 High tide in Vizag - 18 Sep 2025 - <span className="text-yellow-600">⏳ Pending</span></li>
        </ul>
      </div>

      {/* Reputation */}
      <div className="bg-white shadow rounded-xl p-4 mb-6">
        <h2 className="text-lg font-semibold mb-2">Reputation</h2>
        <p><strong>Trust Score:</strong> 78/100</p>
        <p><strong>Badges:</strong> 🏅 Verified Reporter, ⭐ Top Contributor</p>
      </div>

      {/* Activity Log */}
      <div className="bg-white shadow rounded-xl p-4">
        <h2 className="text-lg font-semibold mb-2">Activity Log</h2>
        <ul className="list-disc pl-6">
          <li>Last login: 21 Sep 2025, 10:45 AM</li>
          <li>Submitted 2 reports this week</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
