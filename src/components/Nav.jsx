import React from "react";
import { AppContext } from "../App";
import ToggleTheme from "./ToggleTheme/ToggleTheme";
import "./ToggleTheme/ToggleTheme.css";
import useScrollBlock from "../services/useScrollBlock";
import { FiMenu } from "react-icons/fi";

export default function Nav() {
  const { homeVisibility } = React.useContext(AppContext);
  const navClass = homeVisibility ? "nav--absolute" : "nav--fixed";

  const [blockScroll, allowScroll] = useScrollBlock();

  const [showMenu, setShowMenu] = React.useState(false);
  function toggleMenu() {
    setShowMenu((prevShowMenu) => !prevShowMenu);
    if (showMenu) {
      allowScroll();
    } else {
      blockScroll();
    }
  }
  const windowWidth = window.innerWidth;
  const isBigWindow = windowWidth > 1200 ? true : false;

  return (
    <nav className={`${navClass}`}>
      <div className="container">
        <div className="nav--logo">
          <a className="nav--link" href="#">
            training <span className="orange--word">studio</span>
          </a>
        </div>
        {(showMenu || isBigWindow) && (
          <ul className="nav--list">
            <li>
              <a className="nav--link" href="#">
                home
              </a>
            </li>
            <li>
              <a className="nav--link" href="#">
                about
              </a>
            </li>
            <li>
              <a className="nav--link" href="#">
                classes
              </a>
            </li>
            <li>
              <a className="nav--link" href="#">
                schedules
              </a>
            </li>
            <li>
              <a className="nav--link" href="#">
                contact
              </a>
            </li>
            <li>
              <a href="#" className="nav--link signup--btn">
                sign up
              </a>
            </li>
          </ul>
        )}
        {(showMenu || isBigWindow) && <ToggleTheme />}
        <FiMenu onClick={toggleMenu} className="menu--icon" />
      </div>
    </nav>
  );
}
