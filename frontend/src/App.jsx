import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Profile from "./pages/profile";
import Admin from "./pages/admin";
import Reports from "./pages/Reports";

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#f9fafb] to-[#e5edf3]">
      <Navbar />

      <div className="pt-20"> {/* Padding so content isn't hidden under Navbar */}
        <Routes>
          {/* Home / Landing Page */}
          <Route
            path="/"
            element={
              <section className="flex flex-col items-center justify-center h-[80vh] text-center px-6">
                <h1 className="text-5xl font-bold text-[#6a83a6] mb-4">
                  Welcome to Pravah 🌊
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl">
                  A platform for hazard reporting, monitoring, and alerting. Stay
                  informed, stay safe.
                </p>
              </section>
            }
          />

          {/* Profile Page */}
          <Route path="/profile" element={<Profile />} />

          {/* Admin Page */}
          <Route path="/admin" element={<Admin />} />
<Route path="/reports" element={<Reports />} />

          {/* Optional: placeholders for Dashboard & Reports */}
          <Route path="/dashboard" element={<h1 className="text-center mt-10 text-2xl">📊 Dashboard Page</h1>} />
          <Route path="/reports" element={<h1 className="text-center mt-10 text-2xl">📝 Reports Page</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
