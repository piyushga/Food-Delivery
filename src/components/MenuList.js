import { useDispatch } from "react-redux";
import { ITEM_IMG } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const MenuList = (props) => {
  const { items } = props;

  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="text-left border-gray-300 border-b-2 m-2 p-4 flex justify-between"
        >
          <div className="w-10/12">
            <div className="text-lg font-bold">{item?.card?.info?.name}</div>
            <div className="text-sm">
              ₹{" "}
              {(item.card.info.price ||
                item.card.info.defaultPrice ||
                item.card.info.finalprice) / 100}
            </div>
            <div className="text-xs pt-2">{item.card.info.description}</div>
          </div>
          <div className="w-2/12 relative ">
            <div className="absolute">
              <button
                className="bg-black text-white px-2 py-1"
                onClick={() => handleAddItem(item)}
              >
                Add
              </button>
            </div>
            <img
              src={ITEM_IMG + item?.card?.info?.imageId}
              alt="Item Image"
              className="w-full rounded-lg "
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuList;
