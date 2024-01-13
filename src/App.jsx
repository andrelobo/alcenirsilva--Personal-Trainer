import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import CallToAction from "./components/CallToAction";
import Classes from "./components/Classes";
import Schedules from "./components/Schedules";
import Trainers from "./components/Trainers";
import Contact from "./components/Contact";

const AppContext = React.createContext();
export { AppContext };

export default function App() {
  const sectionRefs = React.useRef([]);
  const homeRef = React.useRef();
  const [homeVisibility, setHomeVisibility] = React.useState(true);

  const [theme, setTheme] = React.useState("light-theme");
  function toggleTheme() {
    setTheme((prevTheme) =>
      prevTheme === "light-theme" ? "dark-theme" : "light-theme"
    );
    // For changing scrollbar colors between light & dark modes
    document.querySelector("html").classList.toggle("dark-mode");
  }

  const windowWidth = window.innerWidth;
  const isBigWindow = windowWidth >= 1200 ? true : false;

  return (
    <AppContext.Provider
      value={{
        homeRef,
        homeVisibility,
        setHomeVisibility,
        theme,
        toggleTheme,
        sectionRefs,
        isBigWindow
      }}
    >
      <div className={`${theme}`}>
        <Nav />
        <Home />
        <About />
        <CallToAction />
        <Classes />
        <Schedules />
        <Trainers />
        <Contact />
      </div>
    </AppContext.Provider>
  );
}
