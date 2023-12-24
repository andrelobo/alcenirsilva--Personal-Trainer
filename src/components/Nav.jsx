import React from "react";
import { AppContext } from "../App";
import ToggleTheme from "./ToggleTheme/ToggleTheme";
import "./ToggleTheme/ToggleTheme.css";
import useScrollBlock from "../services/useScrollBlock";
import { FiMenu } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";

export default function Nav() {
  const { homeVisibility, currentSectionRefs } = React.useContext(AppContext);
  const navClass = homeVisibility ? "nav--absolute" : "nav--fixed";

  const [blockScroll, allowScroll] = useScrollBlock();

  const [showMenu, setShowMenu] = React.useState(false);
  function toggleMenu() {
    setShowMenu((prevShowMenu) => !prevShowMenu);
    if (!isBigWindow) {
      if (showMenu) {
        allowScroll();
      } else {
        blockScroll();
      }
    }
  }
  const windowWidth = window.innerWidth;
  const isBigWindow = windowWidth > 1200 ? true : false;

  const menu_icon = showMenu ? (
    <FaTimes onClick={toggleMenu} className="menu--icon" />
  ) : (
    <FiMenu onClick={toggleMenu} className="menu--icon" />
  );

  const [activeLink, setActiveLink] = React.useState({
    home: false,
    about: false,
    classes: false,
    schedules: false,
    contact: false,
  });

  React.useEffect(() => {
    const currentSectionOptions =
      windowWidth > 1057
        ? {
            threshold: 0.5,
            rootMargin: "40% 0px -25% 0px",
          }
        : {
            threshold: 0,
            rootMargin: "-50% 0px -50% 0px",
          };
    const currentSectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id;
        setActiveLink((prevActiveLink) => {
          return { ...prevActiveLink, [`${id}`]: entry.isIntersecting };
        });
      });
    }, currentSectionOptions);
    currentSectionRefs.current.forEach((element) => {
      currentSectionObserver.observe(element);
    });
  }, []);

  return (
    <nav className={`${navClass}`}>
      <div className="container">
        <div className="nav--logo">
          <a className="nav--link" href="#home">
            training <span className="orange--word">studio</span>
          </a>
        </div>
        {(showMenu || isBigWindow) && (
          <ul className="nav--list slidein">
            <li onClick={toggleMenu}>
              <a
                className={`nav--link ${activeLink.home ? "active" : ""}`}
                href="#home"
              >
                home
              </a>
            </li>
            <li onClick={toggleMenu}>
              <a
                className={`nav--link ${activeLink.about ? "active" : ""}`}
                href="#about"
              >
                about
              </a>
            </li>
            <li onClick={toggleMenu}>
              <a
                className={`nav--link ${activeLink.classes ? "active" : ""}`}
                href="#classes"
              >
                classes
              </a>
            </li>
            <li onClick={toggleMenu}>
              <a
                className={`nav--link ${activeLink.schedules ? "active" : ""}`}
                href="#schedules"
              >
                schedules
              </a>
            </li>
            <li onClick={toggleMenu}>
              <a
                className={`nav--link ${activeLink.contact ? "active" : ""}`}
                href="#contact"
              >
                contact
              </a>
            </li>
            <li>
              <a className="nav--link signup--btn" href="#">
                sign up
              </a>
            </li>
          </ul>
        )}
        {isBigWindow ? (
          <ToggleTheme />
        ) : (
          <div className="nav--rightside-group">
            <ToggleTheme />
            {menu_icon}
          </div>
        )}
      </div>
    </nav>
  );
}
