import React from "react";
import { AppContext } from "../App";

export default function Contact() {
  const { sectionRefs } = React.useContext(AppContext);
  return (
    <section
      className="contact"
      id="contact"
      ref={(element) => (sectionRefs.current[5] = element)}
    >
      <div className="container">
        <h1>Contact Section</h1>
      </div>
    </section>
  );
}
