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
    <div className="m-4 w-[280px] bg-gray-50 rounded-lg h-[380px] font-poppins hover:bg-gray-300">
      <img
        className="w-[280px] h-[230px] rounded-lg"
        alt="food-item"
        src={CDN_IMAGE_URL + cloudinaryImageId}
      />
      <div className="p-2 flex justify-between">
        <h3 className="font-sans font-bold py-2 truncate">{name}</h3>
        <div className="flex items-center h-5 mt-2 bg-green-700 text-white px-2 rounded">
          <span className="text-sm font-medium">{avgRating}</span>
          <span className="ml-1 text-white">★</span>
        </div>
      </div>
      <h4 className="p-2 truncate leading-none">{cuisines.join(", ")}</h4>
      <h4 className="p-2 leading-none">{sla.deliveryTime} mins</h4>
      <h4 className="p-2 leading-none">{costForTwo}</h4>
    </div>
  );
};

export default ResturantCard;
