import React from "react";
import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "arav",
    email: "a@g.com",
  },
});
export default UserContext;
