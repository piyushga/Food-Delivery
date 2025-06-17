import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";
import MenuCategory from "./MenuCategory";

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

  const itemCategories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (ctg) =>
        ctg?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log("Categories; ", itemCategories);
  return (
    <div className="text-center ">
      <h1 className="font-bold text-2xl my-4">{name}</h1>
      <p className="font-bold text-lg">{cuisines.join(", ")}</p>
      <p>
        {avgRatingString}&nbsp;({totalRatingsString})&nbsp;&nbsp;
        {costForTwoMessage}
      </p>
      <h1>
        {itemCategories.map((category) => (
          <MenuCategory
            key={category?.card?.card?.categoryId}
            data={category?.card?.card}
          />
        ))}
      </h1>
    </div>
  );
};

export default ResturantMenu;
