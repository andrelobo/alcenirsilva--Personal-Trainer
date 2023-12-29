import React from "react";
import { AppContext } from "../App";
import SectionHeader from "./SectionHeader/index";
import data from "../services/classes.json";
import dumbbell from "../assets/images/tabs-first-icon.png";

export default function Classes() {
  const { sectionRefs } = React.useContext(AppContext);
  const [classes, setClasses] = React.useState(data.trainingClasses);

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
        <div className="classes--main">
          <div className="classes--list">
            <div className="classes--card active">
              <img src={dumbbell} alt="icon" />
              {classes[0].name}
            </div>
            <div className="classes--card">
              <img src={dumbbell} alt="icon" />
              {classes[1].name}
            </div>
            <div className="classes--card">
              <img src={dumbbell} alt="icon" />
              {classes[2].name}
            </div>
            <div className="classes--card">
              <img src={dumbbell} alt="icon" />
              {classes[3].name}
            </div>
            <div className="main--button classes--main-btn">
              view all schedules
            </div>
          </div>
          <div className="classes--classPreview">
            <div className="classes--class-image">
              <img
                src={classes[0].image}
                alt="class--card-img"
                className="classes--img"
              />
            </div>
            <div className="classes--class-name">{classes[0].name}</div>
            <div className="classes--class-details">{classes[0].details}</div>
            <div className="main--button classes--classPreview-btn">
              view schedule
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
