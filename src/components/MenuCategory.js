import MenuList from "./MenuList";

const MenuCategory = (props) => {
  const { data } = props;
  return (
    <div>
      <div className="w-6/12 bg-gray-100 p-4 mx-auto my-4 rounded-md shadow-lg">
        <div className="flex justify-between">
          <span className="text-lg font-bold">
            {data?.title} ({data?.itemCards?.length})
          </span>
          <span>v</span>
        </div>
        <MenuList items={data?.itemCards} />
      </div>
    </div>
  );
};

export default MenuCategory;
