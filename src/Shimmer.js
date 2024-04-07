import React from "react";

const ShimmerCard = () => {
  const shimmerArray = Array.from({ length: 10 });

  return (
    <div className="flex flex-wrap justify-center mt-10 -mx-2  ">
      {shimmerArray.map((_, index) => (
        <div className="lg:w-1/4 w-1/2 md:w-1/3 px-2 mb-4  " key={index}>
          <div className="bg-gray-300 h-64 animate-pulse rounded-lg"></div>
          <div className="bg-gray-200 h-4 mt-2 animate-pulse w-2/3"></div>
          <div className="bg-gray-200 h-4 mt-2 animate-pulse w-1/3"></div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerCard;
