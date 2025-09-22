import React from "react";

const Reports = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-[#6a83a6] mb-6">📑 Reports</h1>
      <p className="text-lg text-gray-700 mb-6">
        Here you can view, generate, and analyze reports. This section helps you
        monitor hazard trends and summarize key insights.
      </p>

      {/* Example report cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-[#6a83a6] mb-2">
            🌊 Flood Reports
          </h2>
          <p className="text-gray-600">
            Detailed logs and summaries of recent flood hazards.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-[#6a83a6] mb-2">
            🌪️ Cyclone Reports
          </h2>
          <p className="text-gray-600">
            Track cyclone activity and its impact on affected regions.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-[#6a83a6] mb-2">
            🔥 Fire Reports
          </h2>
          <p className="text-gray-600">
            View statistics and details about reported fire incidents.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reports;
