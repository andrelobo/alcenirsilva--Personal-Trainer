import React from "react";
import { AppContext } from "../App";
import SectionHeader from "./SectionHeader/index";

export default function Classes() {
  const { sectionRefs } = React.useContext(AppContext);
  return (
    <section
      ref={(element) => (sectionRefs.current[2] = element)}
      id="classes"
      className="classes"
    >
      <div className="container">
        <SectionHeader>
          <SectionHeader.Title>
            OUR <span className="orange--word">CLASSES</span>
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
