import React, { useState, useEffect } from "react";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("SHG Details");
  return (
    <div className="h-screen bg-[#f1f9f9] flex  flex-col">
      <div className="flex flex-grow pt-20 px-8">
        <div className="w-1/3 p-6 bg-slate-100 shadow-lg font-semibold text-xl rounded-lg">
          <ul className="space-y-8">
            <li
              className={`cursor-pointer ${
                activeTab === "Current Loan"
                  ? "text-blue-600 font-semibold"
                  : ""
              }`}
              onClick={() => setActiveTab("Current Loan")}
            >
              Current Loan
            </li>
            <li
              className={`cursor-pointer ${
                activeTab === "Previous Loans"
                  ? "text-blue-600 font-semibold"
                  : ""
              }`}
              onClick={() => setActiveTab("Previous Loans")}
            >
              Previous Loan Details
            </li>
            <li
              className={`cursor-pointer ${
                activeTab === "Stats" ? "text-blue-600 font-semibold" : ""
              }`}
              onClick={() => setActiveTab("Stats")}
            >
              Stats & Info
            </li>
            <li
              className={`cursor-pointer ${
                activeTab === "SHG Details" ? "text-blue-600 font-semibold" : ""
              }`}
              onClick={() => setActiveTab("SHG Details")}
            >
              SHG Details
            </li>
          </ul>
          {/* Credit Score Display */}
          <div className="mt-8 text-lg text-gray-500">
            Credit Score:{" "}
            <span className="font-semibold text-green-500">720</span>
          </div>
        </div>

        {/* Right Side - Dynamic Content */}
        <div className="w-2/3 p-6 ml-4 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            {activeTab}
          </h2>
          <div>
            {/* Content for each tab */}
            {activeTab === "Current Loan" && (
              <p>Your current loan details...</p>
            )}
            {activeTab === "Previous Loans" && (
              <p>Your previous loan history...</p>
            )}
            {activeTab === "Stats" && (
              <div className="grid grid-cols-2 gap-4">
                {/* Placeholder for graphic stats */}
                <div className="p-4 bg-[#e0f7f9] rounded-lg shadow-md text-center">
                  <h3 className="text-xl font-semibold text-blue-600">
                    Total Loans
                  </h3>
                  <p className="text-2xl font-bold">25</p>
                </div>
                <div className="p-4 bg-[#e0f7f9] rounded-lg shadow-md text-center">
                  <h3 className="text-xl font-semibold text-blue-600">
                    Repayment Rate
                  </h3>
                  <p className="text-2xl font-bold">98%</p>
                </div>
              </div>
            )}
            {activeTab === "SHG Details" && (
              <p>Details about the Self-Help Group (SHG)...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
