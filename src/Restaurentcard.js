// Restaurant card component: Image, name, cuisine
import { IMG_CDN_URL } from "./constant";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  sla,
  costForTwo,
}) => {
  return (
    <div className=" p-4 shadow-lg rounded-lg flex h-[450px] md:h-[400px] flex-wrap w-fit hover:scale-95">
      <div className="h-48 overflow-hidden rounded-t-lg">
        <img
          className="w-[100vw] h-full object-cover"
          src={IMG_CDN_URL + cloudinaryImageId}
          alt={name}
        />
      </div>

      <div className="flex flex-col mt-3">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-600 text-sm">{cuisines.join(", ")}</p>
        <p className="text-gray-600 text-xs mt-1">{areaName}</p>
        <div className="flex items-center mt-2">
          <h4 className="text-sm text-gray-600">•</h4>
          <h4 className="text-sm text-gray-600">
            {sla?.lastMileTravelString ?? "2.0 km"}
          </h4>
          <h4 className="text-sm text-gray-600 mx-1">•</h4>
          <h4 className="text-sm text-gray-600">
            {costForTwo ?? "₹200 for two"}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
