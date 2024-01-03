import React from "react";
import { AppContext } from "../App";
import SectionHeader from "./SectionHeader/index";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function Schedules() {
  const { sectionRefs, isBigWindow } = React.useContext(AppContext);

  const [open, setOpen] = React.useState(false);
  function handleDropdown() {
    setOpen((prevOpen) => !prevOpen);
  }
  const dropdownStyles = {
    display: open || isBigWindow ? "flex" : "none",
  };

  const dropdownArrow = open ? <IoIosArrowUp /> : <IoIosArrowDown />;

  return (
    <section
      className="schedules"
      ref={(element) => (sectionRefs.current[3] = element)}
      id="schedules"
    >
      <div className="container">
        <SectionHeader>
          <SectionHeader.Title>
            <span className="schedules--normal-word">CLASSES</span> <span className="orange--word">SCHEDULE</span>
          </SectionHeader.Title>
          <SectionHeader.Desc>
            Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed
            viverra ipsum dolor, ultricies fermentum massa consequat eu.
          </SectionHeader.Desc>
        </SectionHeader>
        <div className="schedules--main">
          <div className="schedules--days-filter">
            {!isBigWindow && (
              <button
                className="schedules--select-button main--button"
                onClick={handleDropdown}
              >
                <span className="schedules--select-value">choose day</span>
                <span className="schedules--select-arrow">{dropdownArrow}</span>
              </button>
            )}
            <ul
              style={dropdownStyles}
              className="schedules--days-list schedules--dropdown-menu"
            >
              <li className="schedules--day-item">
                <input type="radio" id="monday" name="day" defaultChecked />
                <label htmlFor="monday">monday</label>
              </li>
              <div className="schedules--day-separator">/</div>
              <li className="schedules--day-item">
                <input type="radio" id="tuesday" name="day" />
                <label htmlFor="tuesday">tuesday</label>
              </li>
              <div className="schedules--day-separator">/</div>
              <li className="schedules--day-item">
                <input type="radio" id="wednesday" name="day" />
                <label htmlFor="wednesday">wednesday</label>
              </li>
              <div className="schedules--day-separator">/</div>
              <li className="schedules--day-item">
                <input type="radio" id="thursday" name="day" />
                <label htmlFor="thursday">thursday</label>
              </li>
              <div className="schedules--day-separator">/</div>
              <li className="schedules--day-item">
                <input type="radio" id="friday" name="day" />
                <label htmlFor="friday">friday</label>
              </li>
            </ul>
          </div>
          <div className="schedules--timetable">timetable</div>
        </div>
      </div>
    </section>
  );
}
