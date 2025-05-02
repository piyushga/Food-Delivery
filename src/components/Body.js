import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  //State variable
  const [listOfResturants, setListOfResturants] = useState([]);
  const [filteredResturant, setfilteredResturant] = useState([]);
  const [searchText, setSearchText] = useState("");

  console.log("Body Rendered");

  useEffect(() => {
    console.log("Use effect Called");
    data();
  }, []);

  // Fetching data from Swiggy API
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

    setfilteredResturant(
      resLists?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  // Handle Search Functionality
  function handleSearch() {
    console.log(searchText);

    const searchList = listOfResturants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setfilteredResturant(searchList);
  }

  // Handle Top Rated Resturant List
  function topRatedResturant() {
    const topRatedList = listOfResturants.filter(
      (res) => res.info.avgRating > 4.3
    );

    console.log("Button click: ", topRatedList);
    setfilteredResturant(topRatedList);
  }

  return listOfResturants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="Body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <button className="filter-btn" onClick={topRatedResturant}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredResturant.map((resturant) => (
          <ResturantCard key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
