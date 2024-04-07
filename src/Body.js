import { useState, useEffect, useContext } from "react";
import RestaurantCard from "./Restaurentcard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import MidBody from "./MidBody";

const Body = () => {
  const [Allrest, setAllrest] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [Filterrest, setFilterrest] = useState([]);


  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.912185&lng=75.783304&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();

      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {
          let checkData =
            json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }

      const resData = await checkJsonData(json);
      setAllrest(resData);
      setFilterrest(resData);
    } catch (error) {
      console.log(error);
    }
  }

  function searchData(searchText, Allrest) {
    const resFilterData = Allrest.filter((restaurant) =>
      restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilterrest(resFilterData);
  }

  const handleSearchChange = (e) => {
    const searchText = e.target.value;
    setSearchText(searchText);
    searchData(searchText, Allrest);
  };

  return Allrest.length === 0 ? (
    <>
      <Shimmer />
    </>
  ) : (
    <>
      <MidBody />
      <div className="flex justify-center items-center mt-6 md:mt-0 space-x-3  ">
        <div className="relative">
          <input
            type="text"
            className="search-input bg-white border rounded-l-lg px-4 py-2 pl-10 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Search a restaurant you want..."
            value={searchText}
            onChange={handleSearchChange}
          />

          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <svg
              className="h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M13.92 12.88a8 8 0 111.41-1.42l3.94 3.95a1 1 0 01-1.42 1.41l-3.95-3.94zM2 8a6 6 0 1112 0A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
        <button
          className="bg-purple-500 text-white py-2 px-6 rounded-r-lg hover:bg-purple-600 transition duration-300 focus:outline-none focus:ring focus:border-purple-300"
          onClick={() => searchData(searchText, Allrest)}
        >
          Search
        </button>
      </div>

      <div className="flex flex-wrap justify-center items-center mt-10   ">
        {Filterrest.map((restaurant) => (
          <div
            className="lg:w-[20vw] w-[40vw] px-2 mb-4 "
            key={restaurant?.info?.id}
          >
            <Link to={"/restaurant/" + restaurant?.info?.id}>
              <RestaurantCard {...restaurant?.info} />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Body;
