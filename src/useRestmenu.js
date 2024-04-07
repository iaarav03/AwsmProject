import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Swiggy_menu_api_URL } from "./constant";

const useRestmenu = (resId) => {
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("Error");
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(Swiggy_menu_api_URL + `/${resId}`);
        setRestaurant(data?.data);
        console.log(restaurant);
        console.log("run");
      } catch (error) {
        setError(error.response);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  return { restaurant, loading, error };
};
export default useRestmenu;
