import React from "react";

const Shimmer1 = () => (
  <div className="bg-gradient-to-r from-green-200 via-blue-100 to-purple-200 p-4 shadow-lg rounded-lg flex flex-col animate-pulse">
    <div className="h-48 overflow-hidden rounded-t-lg">
      <div className="w-full h-full bg-gray-300"></div>
    </div>

    <div className="flex flex-col mt-3">
      <div className="h-6 bg-gray-300 mb-2"></div>
      <div className="h-4 bg-gray-300 w-2/3"></div>
      <div className="h-3 bg-gray-300 w-1/3"></div>
      <div className="flex items-center mt-2">
        <div className="h-4 w-4 bg-gray-300"></div>
        <div className="h-4 w-16 bg-gray-300 ml-1"></div>
        <div className="h-4 w-4 bg-gray-300 mx-1"></div>
        <div className="h-4 w-16 bg-gray-300"></div>
      </div>
    </div>
  </div>
);

export default Shimmer1;
