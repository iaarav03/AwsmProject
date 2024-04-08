import React from "react";
import { createContext } from "react";

const UserContext = createContext({
  user: {
   lat:null,
   lng:null,
  },
});
export default UserContext;
