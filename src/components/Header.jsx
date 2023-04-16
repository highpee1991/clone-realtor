import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [stateChange, setStateChange] = useState("Sign In");
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const pathMatch = (path) => path === pathname;
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setStateChange("Profile");
      } else {
        setStateChange("Sign In");
      }
    });
  }, [auth]);

  return (
    <div className="bg-white border-b sticky top-0 z-50">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="Logo"
            className="h-5 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>

        <div>
          <ul className="flex space-x-10">
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-500 border-b-[3px] border-b-transparent ${
                pathMatch("/") && ` text-zinc-950 border-b-red-700`
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-500 border-b-[3px] border-b-transparent ${
                pathMatch("/offers") && ` text-zinc-950 border-b-red-700`
              }`}
              onClick={() => navigate("/offers")}
            >
              Offers
            </li>

            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-500 border-b-[3px] border-b-transparent ${
                (pathMatch("/sign-in") || pathMatch("/profile")) &&
                ` text-zinc-950 border-b-red-700`
              }`}
              onClick={() => navigate("/profile")}
            >
              {stateChange}
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
