import { Category_IMG_ID } from "../utils/constants";

const Categories = (props) => {
  const { categoryData } = props;

  return (
    <div className="leading-none">
      <img className="m-4 w-20" src={Category_IMG_ID + categoryData?.imageId} />
    </div>
  );
};

export default Categories;
