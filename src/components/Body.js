import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useNetworkStatus from "../utils/useNetworkStatus";

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
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.047399&lng=73.0697805&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const resLists = await foodData.json();
    console.log("Response body: ", resLists);

    //Dynamically Handling. It goes throigh each item in array and looks for the first card that has this path
    const restaurantsCard = resLists?.data?.cards?.find(
      (item) => item?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log("Resturant Cards: ", restaurantsCard);

    const restaurants =
      restaurantsCard?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
      [];

    console.log("Resturants: ", restaurants);

    setListOfResturants(restaurants);
    setfilteredResturant(restaurants);
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
  const onlineStatus = useNetworkStatus();
  if (onlineStatus === false)
    return <h1>Looks like you are not connected to internet!!!! </h1>;

  return listOfResturants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="Body">
      <div className="filter flex">
        <div className="search m-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 bg-green-100 m-4 rounded-lg"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="search m-2 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={topRatedResturant}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredResturant.map((resturant) => (
          <Link key={resturant.info.id} to={"/resturants/" + resturant.info.id}>
            <ResturantCard resData={resturant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
