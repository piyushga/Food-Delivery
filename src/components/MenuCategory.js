import { useState } from "react";
import MenuList from "./MenuList";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const MenuCategory = ({ data, showItems, setShowIndex }) => {
  // const [showItems, setShowItems] = useState(false);
  const openAccordion = () => {
    // if (showItems === true) setShowItems(false);
    // else setShowItems(true);
    setShowIndex();
  };

  return (
    <div className="w-6/12 bg-gray-100 p-4 mx-auto my-4 rounded-md shadow-lg">
      <div
        className="flex justify-between cursor-pointer"
        onClick={openAccordion}
      >
        <span className="text-lg font-bold">
          {data?.title} ({data?.itemCards?.length})
        </span>
        {showItems ? (
          <SlArrowUp className="mt-2" />
        ) : (
          <SlArrowDown className="mt-2" />
        )}
      </div>
      {showItems && <MenuList items={data?.itemCards} />}
    </div>
  );
};

export default MenuCategory;
