import React from "react";
import { AppContext } from "../App";
import SectionHeader from "./SectionHeader/index";
import schedulesBgImg from "../assets/images/schedule-bg.jpg"

export default function Schedules() {
  const { sectionRefs } = React.useContext(AppContext);
  return (
    <section
      className="schedules"
      ref={(element) => (sectionRefs.current[3] = element)}
      id="schedules"
    >
      <div className="container">
        <SectionHeader>
          <SectionHeader.Title>
            CLASSES <span className="orange--word">SCHEDULE</span>
          </SectionHeader.Title>
          <SectionHeader.Desc>
            Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed
            viverra ipsum dolor, ultricies fermentum massa consequat eu.
          </SectionHeader.Desc>
        </SectionHeader>
      </div>
    </section>
  );
}
