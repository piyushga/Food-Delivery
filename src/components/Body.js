import ResturantCard, { vegLabel } from "./ResturantCard";
import resList from "../utils/mockData";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useNetworkStatus from "../utils/useNetworkStatus";
import Categories from "./Categories";

const Body = () => {
  //State variable
  const [listOfResturants, setListOfResturants] = useState([]);
  const [filteredResturant, setfilteredResturant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [categories, setCategories] = useState([]);
  const VegResturantComponent = vegLabel(ResturantCard);

  console.log("Body Rendered", filteredResturant);

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

    const category = resLists?.data?.cards[0]?.card?.card?.imageGridCards?.info;
    console.log("Categories:- ", category);
    setCategories(category);

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
      <div className="mx-8 my-4 font-bold text-sm">What's on your Mind</div>
      <div className="flex flex-wrap justify-center">
        {(categories || []).slice(0, 11).map((item) => (
          <Categories key={item.id} categoryData={item} />
        ))}
      </div>
      <hr className="m-4 my-4 border-t border-gray-300" />
      <div className="filter flex">
        <div className="search m-8">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 bg-amber-200 m-4 rounded-lg"
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
      <div className="mx-8 font-bold text-lg">
        Restaurant's with Online food delivery
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredResturant.map((resturant) => (
          <Link key={resturant.info.id} to={"/resturants/" + resturant.info.id}>
            {resturant?.info?.veg === true ? (
              <VegResturantComponent resData={resturant} />
            ) : (
              <ResturantCard resData={resturant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
