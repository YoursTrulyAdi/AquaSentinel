import React from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#f9fafb] to-[#e5edf3]">
      <Navbar />

      {/* Hero section */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-6">
        <h1 className="text-5xl font-bold text-[#6a83a6] mb-4">
          Welcome to Pravah 🌊
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          A platform for hazard reporting, monitoring, and alerting. Stay
          informed, stay safe.
        </p>
      </section>
    </div>
  );
}

export default App;
