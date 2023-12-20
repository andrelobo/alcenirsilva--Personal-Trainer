import React from "react";
import { FaRegSun, FaRegMoon } from "react-icons/fa6";
import { AppContext } from "../../App";

export default function ToggleTheme() {
  const { toggleTheme } = React.useContext(AppContext);
  return (
    <div onClick={toggleTheme} className="toggle--theme">
      <FaRegSun className="sun--icon" />
      <div className="bar">
        <div className="circle"></div>
      </div>
      <FaRegMoon className="moon--icon" />
    </div>
  );
}
