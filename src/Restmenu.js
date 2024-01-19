import { useParams} from "react-router-dom";
import { RESTAURANT_TYPE_KEY } from "./constant";
import { MENU_ITEM_TYPE_KEY } from "./constant";
import { IMG_CDN_URL } from "./constant";
import { ITEM_IMG_CDN_URL } from "./constant";
import { Swiggy_menu_api_URL } from "./constant";
import { useState,useEffect } from "react";
import ShimmerCard from "./Shimmer";
import { useDispatch } from "react-redux";
import { additem } from "./cartslice";
const Menu = () => {


    const { resId } = useParams(); // call useParams and get value of restaurant id using object destructuring
    const [restaurant, setRestaurant] = useState(null); // call useState to store the api data in res
    const [menuItems, setMenuItems] = useState([]);
    useEffect(() => {
      getRestaurantInfo(); // call getRestaurantInfo function so it fetch api data and set data in restaurant state variable
    }, []);
    const dispatch=useDispatch();
    const addbutton=(item)=>{
      dispatch(additem(item));
    };
  
    async function getRestaurantInfo() {
      try {
        const response = await fetch(Swiggy_menu_api_URL+ resId);
        const json = await response.json();
  
        // Set restaurant data
        const restaurantData = json?.data?.cards?.map(x => x.card)?.
                               find(x => x && x.card['@type'] === RESTAURANT_TYPE_KEY)?.card?.info || null;
        setRestaurant(restaurantData);
  
        // Set menu item data
        const menuItemsData = json?.data?.cards.find(x=> x.groupedCard)?.
                              groupedCard?.cardGroupMap?.REGULAR?.
                              cards?.map(x => x.card?.card)?.
                              filter(x=> x['@type'] == MENU_ITEM_TYPE_KEY)?.
                              map(x=> x.itemCards).flat().map(x=> x.card?.info) || [];
        
        const uniqueMenuItems = [];
        menuItemsData.forEach((item) => {
          if (!uniqueMenuItems.find(x => x.id === item.id)) {
            uniqueMenuItems.push(item);
          }
        })
        setMenuItems(uniqueMenuItems);
      } catch (error) {
        setMenuItems([]);
        setRestaurant(null);
        console.log(error);
      }
    }








  return    menuItems.length===0?(<ShimmerCard />) :(

 <>
      <div className="bg-gradient-to-r from-green-200 via-blue-100 to-purple-200 min-h-screen " >
        <div className="container mx-auto p-6 ">
          <div className="gradient-to-r from-green-200 via-blue-100 to-purple-200 rounded-lg  p-6 w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:order-1">
                <img
                  className="w-full md:w-auto mx-auto rounded-lg"
                  src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
                  alt={restaurant?.name}
                />
              </div>
              <div className="md:order-2 mt-16">
                <h2 className="text-2xl font-semibold">{restaurant?.name}</h2>
                <p className="text-gray-600">{restaurant?.cuisines?.join(", ")}</p>
                <div className="flex items-center mt-2">
                  <div
                    className={`rounded-full px-2 py-1 ${
                      restaurant?.avgRating < 4
                        ? "bg-red-500"
                        : restaurant?.avgRating === "--"
                        ? "bg-white text-black"
                        : "bg-purple-500"
                    }`}
                  >
                    <i className="fa-solid fa-star text-white"></i>
                    <span className="ml-1">{restaurant?.avgRating}</span>
                  </div>
                  <div className="mx-2">|</div>
                  <div>{restaurant?.sla?.slaString}</div>
                  <div className="mx-2">|</div>
                  <div>{restaurant?.costForTwoMessage}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <div className="gradient-to-r from-green-200 via-blue-100 to-purple-200 rounded-lg shadow-lg p-6 w-2/3 ">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">Recommended</h3>
                <p className="text-gray-600">{menuItems.length} ITEMS</p>
              </div>
              <div className=" mt-4">
                {menuItems.map((item) => (
                  <div className="gradient-to-r from-green-200 via-blue-100 to-purple-200 rounded-lg shadow-xl p-4 flex flex-col justify-between"  key={item?.id}>
                    <div>
                      <h3 className="text-lg font-semibold">{item?.name}</h3>
                      <p className="text-gray-600 font-semibold">
                        {item?.price > 0
                          ? new Intl.NumberFormat("en-IN", {
                              style: "currency",
                              currency: "INR",
                            }).format(item?.price / 100)
                          : " "}
                      </p>
                     
                      <p className="mt-2 font-extralight">{item?.description}</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      {item?.imageId && (
                        <img
                          className="w-12 h-12 object-cover rounded-full"
                          src={ITEM_IMG_CDN_URL + item?.imageId}
                          alt={item?.name}
                        />
                      )}
                      <button onClick={()=>addbutton(item)} className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-300 focus:outline-none">
                        ADD +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu; 