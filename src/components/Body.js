import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";

const Body = () => {
  return (
    <div className="Body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((resturant) => (
          <ResturantCard key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
