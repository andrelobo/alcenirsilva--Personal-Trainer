import React from "react";
import gymVideo from "../assets/images/gym-video.mp4";
import MainButton from "./mainButton";
import { AppContext } from "../App";

export default function Home() {
  const { homeRef, setHomeVisibility } = React.useContext(AppContext);
  React.useEffect(() => {
    const options = {
      rootMargin: "-80px",
    };
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setHomeVisibility(entry.isIntersecting);
    }, options);
    observer.observe(homeRef.current);
  }, []);

  return (
    <section ref={homeRef} className="home">
      <video autoPlay loop muted src={gymVideo} className="home--video"></video>
      <div className="container">
        <div className="home--caption">
          <h6>work harder, get stronger</h6>
          <h2>
            easy with our <span className="orange--word">gym</span>
          </h2>
        </div>
        <MainButton>become a member</MainButton>
      </div>
    </section>
  );
}
