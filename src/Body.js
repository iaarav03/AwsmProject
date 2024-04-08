import { useState, useEffect, useContext } from "react";
import RestaurantCard from "./Restaurentcard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import MidBody from "./MidBody";
import UserContext from "./UseContext";
import { MdLocationOn } from "react-icons/md";

const Body = () => {
  const [Allrest, setAllrest] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [Filterrest, setFilterrest] = useState([]);

  const [status, setStatus] = useState(null);
  const[loading,setLoading]=useState(true);
  const {user,setUser}=useContext(UserContext);

  console.log(user);
  useEffect(() => {
    getLocation();
    // Ensure we only call getRestaurants if lat and lng are not null
    if (user.lat && user.lng) {
      getRestaurants();
    }
  },[user.lat,user.lng] );
  
  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newLat = position.coords.latitude;
          const newLng = position.coords.longitude;
         
          setUser({
            lat:newLat,
            lng:newLng
          })
          setStatus('Please wait as restaurent list is loading');
         
          // Call getRestaurants here after location is updated
           // Make sure this function can handle the asynchronous setting of lat and lng
        },
        () => {
          setStatus('Please Grant Permission');
        }
      );
    }
  };

  async function getRestaurants() {
  //   if (user.lat == 1 || user.lng == 1) {
  //     console.error("Latitude or longitude is not set.");
  //     return;
  //   }
  // setLoading(true);
  //   // Ensure we only have 4 digits after the decimal point
  //   const formattedLat = user.lat.toFixed(4);
  //   const formattedLng = user.lng.toFixed(4);
  
    try {
      const response = await fetch(
        // `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${user.lat}&lng=${user.lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
        `https://foodfire.onrender.com/api/restaurants?lat=${user.lat}&lng=${user.lng}&page_type=DESKTOP_WEB_LISTING`
      );
      const json = await response.json();
            
      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {
            let checkData =
                jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
                    ?.restaurants;
            if (Array.isArray(checkData)) { // Ensure checkData is an array
                return checkData;
            }
        }
        return []; // Return an empty array if no restaurants found
    }
      

      const resData = await checkJsonData(json);
      setAllrest(resData);
      setFilterrest(resData);
      console.log(Filterrest);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
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

  return Allrest.length === 0? (
    <>
        
      <div className="flex flex-row">
      {/* <div
      >
 <h1 className="text-l ml-16 font-bold text-[#e21616]">Location access :  </h1>
      </div> */}
     
      <div>
 <button className="pl-1" onClick={getLocation}><MdLocationOn className="text-3xl "/></button>
      </div>
     
      
      <p className="text-l font-semibold font-serif text-[#8c0c57]">{status}...</p>
   
      {/* Rest of your JSX */}
      
    </div>
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
