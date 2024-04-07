import { StarIcon } from "@heroicons/react/24/solid";
import { IMG_CDN_URL } from "./constant";
const RestaurantInfo = ({ info }) => {
  const { name, sla, areaName, totalRatingsString, avgRatingString, cuisines,cloudinaryImageId } =
    info;
    console.log(cloudinaryImageId);

  return (
    <div className="flex justify-between items-center pb-4 border-b border-dashed">
      <div>
      <img src={IMG_CDN_URL+`/${cloudinaryImageId}`} className="h-[20vh]"></img>
        <h2 className="text-xl font-bold my-2 text-[#6d407f]">{name}</h2>
        <p className="text text-gray-500">
          {cuisines?.map((c, i) => (
            <span key={i}>
              {c}
              {i === cuisines.length - 1 ? "" : ", "}
            </span>
          ))}
        </p>
        <p className="text text-gray-500">
          {areaName}, {sla.lastMileTravelString}
        </p>
      </div>
      <div className="border rounded-md font-bold  p-2 text-sm">
        <p className="flex-center gap-1 mb-2 text-green-500 ">
          <StarIcon className="w-4 h-4" /> {avgRatingString}
        </p>
        <p className="pt-2 border-t text-xs font-normal text-gray-500">
          {totalRatingsString}
        </p>
      </div>
    </div>
  );
};
export default RestaurantInfo;
