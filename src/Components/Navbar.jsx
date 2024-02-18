import icon from "../images/recycle.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [showCitiesDropdown, setShowCitiesDropdown] = useState(false);

  const toggleCitiesDropdown = () => {
    setShowCitiesDropdown(!showCitiesDropdown);
  };
  return (
    <>
      <nav className="flex justify-between items-center w-full px-[7%] py-[10px] bg-green-700">
        <img src={icon} className="w-[50px]" />
        <ul className="text-white">
          <li className="inline-block my-[10px] mx-[20px] text-[18px] cursor-pointer">
            Home
          </li>
          <li className="inline-block my-[10px] mx-[20px] text-[18px] cursor-pointer">
            Awareness
          </li>
          <li
            className="inline-block my-[10px] mx-[20px] text-[18px] cursor-pointer"
            onMouseEnter={toggleCitiesDropdown}
            onMouseLeave={toggleCitiesDropdown}
          >
            Cities
            {showCitiesDropdown && (
              <div className="absolute bg-green-700 text-white mt-2 p-2">
                <Link to="/pune" className="block py-1">
                  Pune
                </Link>
                <Link to="/delhi" className="block py-1">
                  Delhi
                </Link>
                <Link to="/chennai" className="block py-1">
                  Chennai
                </Link>
              </div>
            )}
          </li>
          <li className="inline-block my-[10px] mx-[20px] text-[18px] cursor-pointer">
            FAQ
          </li>
          <li className="inline-block my-[10px] mx-[20px] text-[18px] cursor-pointer">
            About
          </li>
        </ul>
        <div>
          <button className="text-[23px] text-white">
            <Link to="login">
              <FontAwesomeIcon icon={faRightToBracket} />
            </Link>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
