import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Admin user",
});

export default UserContext;
