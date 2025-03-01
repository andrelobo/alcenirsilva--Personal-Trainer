import React from "react";
import { AppContext } from "../App";
import "./ToggleTheme/ToggleTheme.css"; // Pode ser removido
import useScrollBlock from "../services/useScrollBlock";
import { FiMenu } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";

export default function Nav() {
  const navRefs = React.useRef([]);
  const { homeVisibility, sectionRefs, isBigWindow } = React.useContext(AppContext);
  const navClass = homeVisibility ? "nav--absolute" : "nav--fixed";

  const [blockScroll, allowScroll] = useScrollBlock();

  const [showMenu, setShowMenu] = React.useState(false);
  function toggleMenu() {
    if (!isBigWindow) {
      setShowMenu((prevShowMenu) => !prevShowMenu);
      if (showMenu) {
        allowScroll();
      } else {
        blockScroll();
      }
    }
  }

  const menu_icon = showMenu ? (
    <FaTimes onClick={toggleMenu} className="menu--icon" />
  ) : (
    <FiMenu onClick={toggleMenu} className="menu--icon" />
  );

  const navStyles =
    showMenu || isBigWindow ? { display: "flex" } : { display: "none" };

  const [visibleSections, setVisibleSections] = React.useState({
    home: false,
    about: false,
    contact: false,  // Mantivemos apenas o "contact"
  });
  const visibleSectionsArray = Object.entries(visibleSections);

  React.useEffect(() => {
    const visibleSectionOptions = {
      rootMargin: "-90px 0px 0px",
    };
    const visibleSectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id;

        setVisibleSections((prevVisibleSections) => {
          return { ...prevVisibleSections, [`${id}`]: entry.isIntersecting };
        });
      });
    }, visibleSectionOptions);
    sectionRefs.current.forEach((element) => {
      visibleSectionObserver.observe(element);
    });
  }, []);

  React.useEffect(() => {
    let isActiveCheck = false;
    visibleSectionsArray.forEach((section, index) => {
      if (section[1] && !isActiveCheck) {
        navRefs.current[index].classList.add("active");
        isActiveCheck = true;
      } else {
        navRefs.current[index].classList.remove("active");
      }
    });
  }, [visibleSections]);

  return (
    <nav className={`${navClass} nav--black`}>  {/* Adicionei a classe nav--black */}
      <div className="container">
        <div className="nav--logo">
          <a className="nav--link" href="#home">
            <img src="/logo.png" alt="Logo" className="nav--logo-img" />
          </a>
        </div>
        <ul style={navStyles} className="nav--list slidein">
          <li onClick={toggleMenu}>
            <a
              className="nav--link"
              href="#home"
              ref={(element) => (navRefs.current[0] = element)}
            >
              início
            </a>
          </li>
          <li onClick={toggleMenu}>
            <a
              className="nav--link"
              href="#about"
              ref={(element) => (navRefs.current[1] = element)}
            >
              sobre
            </a>
          </li>
          {/* Removidos os links de aulas, agendamentos e trainers */}
          <li onClick={toggleMenu}>
            <a
              className="nav--link"
              href="#contact"
              ref={(element) => (navRefs.current[2] = element)}
            >
              contato
            </a>
          </li>
                  <li>
          <a className="nav--link signup--btn" href="#">
            Acesse sua conta
          </a>
        </li>

        </ul>
        {isBigWindow ? (
          // Removido o ToggleTheme
          <></>
        ) : (
          <div className="nav--rightside-group">
            {menu_icon}
          </div>
        )}
      </div>
    </nav>
  );
}
