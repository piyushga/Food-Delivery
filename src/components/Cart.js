import { useDispatch, useSelector } from "react-redux";
import MenuList from "./MenuList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center mt-4px">
      <h1 className="font-bold text-2xl mt-4">Cart</h1>
      <div className="w-6/12 m-auto">
        <MenuList items={cartItems} />
        {cartItems.length === 0 ? (
          <h1 className="mt-16 text-center text-2xl font-semibold tracking-wide">
            {" "}
            Your cart is empty&nbsp;— let’s fill it with something tasty!
          </h1>
        ) : (
          <button
            className="p-2 m-4 text-white bg-black rounded-lg"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
