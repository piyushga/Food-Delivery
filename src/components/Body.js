import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useState } from "react";
import { useEffect } from "react";

const Body = () => {
  //State variable
  const [listOfResturants, setListOfResturants] = useState([]);

  useEffect(() => {
    console.log("Use effect Called");
    data();
  }, []);

  const data = async () => {
    const foodData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.047399&lng=73.0697805&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const resLists = await foodData.json();
    console.log("Response body: ", resLists);

    console.log(
      "Resturants Lists: ",
      resLists?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    setListOfResturants(
      resLists?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return (
    <div className="Body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfResturants.filter(
              (res) => res.info.avgRating > 4.2
            );

            console.log("Button click: ", filteredList);
            setListOfResturants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfResturants.map((resturant) => (
          <ResturantCard key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
