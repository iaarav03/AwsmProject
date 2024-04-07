import React from "react";
import useRestmenu from "./useRestmenu";
import { useParams } from "react-router-dom";
import ShimmerCard from "./Shimmer";
import Restmenucategory from "./Restmenucategory";
import RestaurantInfo from "./Restinfo";

const Restmenuu = () => {
  const { resId } = useParams();

  const { restaurant, loading } = useRestmenu(resId);

  return (
    <div className="mt-6 flex justify-center">
      <div className="gradient-to-r from-green-200 via-blue-100 to-purple-200 rounded-lg shadow-lg p-6 w-2/3 ">
        {loading ? (
          <ShimmerCard />
        ) : (
          <>
            <RestaurantInfo info={restaurant?.cards[2]?.card?.card?.info} />
            <Restmenucategory
              menu={
                restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
              }
            />
          </>
        )}
      </div>
    </div>
  );
};
export default Restmenuu;
