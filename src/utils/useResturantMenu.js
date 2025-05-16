import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useResturantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    console.log("Use Effect Menu Called");
    menu();
  }, []);

  const menu = async () => {
    const data = await fetch(MENU_API + resId);
    const resMenu = await data.json();

    console.log("API data: ", resMenu);
    setResInfo(resMenu);
  };
  return resInfo;
};

export default useResturantMenu;
