import React from "react";
import { AppContext } from "../App";
import SectionHeader from "./SectionHeader/index";

export default function Trainers() {
  const { sectionRefs } = React.useContext(AppContext);
  return (
    <section
      className="trainers"
      id="trainers"
      ref={(element) => (sectionRefs.current[4] = element)}
    >
      <div className="container">
        <SectionHeader>
          <SectionHeader.Title>
            EXPERT <span className="orange--word">TRAINERS</span>
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
