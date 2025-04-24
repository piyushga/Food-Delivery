import { CDN_IMAGE_URL } from "../utils/constants";

const ResturantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    cuisines,
    name,
    avgRating,
    totalRatingsString,
    costForTwo,
    sla,
  } = resData?.info;

  return (
    <div className="res-card">
      <img
        className="food-image"
        alt="food-item"
        src={CDN_IMAGE_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>
        {avgRating} ({totalRatingsString})
      </h4>
      <h4>{sla.deliveryTime} mins</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default ResturantCard;
