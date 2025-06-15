import logo from "../images/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import useNetworkStatus from "../utils/useNetworkStatus";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const onlineStatus = useNetworkStatus();

  return (
    <div className="flex justify-between bg-orange-300 shadow-lg m-2">
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
            className="login"
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
