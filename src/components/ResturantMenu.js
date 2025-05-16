import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";

const ResturantMenu = () => {
  console.log("In Resturant Menu Compoenent");

  const { resId } = useParams();
  console.log(resId);

  const resInfo = useResturantMenu(resId);
  if (resInfo === null) return <Shimmer />;

  const {
    name,
    costForTwoMessage,
    cuisines,
    totalRatingsString,
    avgRatingString,
  } = resInfo?.data?.cards[2]?.card?.card?.info;

  const menuList =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card.itemCards;
  console.log("Menu List: ", menuList);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <p>
        {avgRatingString}&nbsp;({totalRatingsString})&nbsp;&nbsp;
        {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {menuList?.map((item) => (
          <li key={item?.card?.info?.name}>
            {item?.card?.info?.name} - Rs.{" "}
            {item?.card?.info?.price || item?.card?.info?.defaultPrice}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResturantMenu;
