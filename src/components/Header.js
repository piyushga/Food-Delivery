import logo from "../images/logo.png";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useNetworkStatus from "../utils/useNetworkStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const onlineStatus = useNetworkStatus();

  const data = useContext(UserContext);
  console.log(data);

  return (
    <div className="flex justify-between bg-amber-100 shadow-lg m-2">
      <div className="logo-container">
        <img className="w-48" src={logo} alt="Logo" />
      </div>

      <div className="flex items-center">
        <ul className="flex m-4 p-4">
          <li className="mx-4">Online Status : {onlineStatus ? "✅" : "🔴"}</li>
          <li className="mx-4">
            <Link to="/">Home</Link>
          </li>

          <li className="mx-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="mx-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="mx-4">Cart</li>
          <li className="mx-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="mx-4"
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            {loginBtn}
          </button>
          <li className="mx-4">{data?.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
