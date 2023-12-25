import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import CallToAction from "./components/CallToAction";
import Nav from "./components/Nav";

const AppContext = React.createContext();
export { AppContext };

export default function App() {
  const sectionRefs = React.useRef([]) 
  const homeRef = React.useRef();
  const [homeVisibility, setHomeVisibility] = React.useState(true);

  const [theme, setTheme] = React.useState("light-theme");
  function toggleTheme() {
    setTheme((prevTheme) =>
      prevTheme === "light-theme" ? "dark-theme" : "light-theme"
    );
  }

  return (
    <AppContext.Provider
      value={{
        homeRef,
        homeVisibility,
        setHomeVisibility,
        theme,
        toggleTheme,
        sectionRefs
      }}
    >
      <div className={`${theme}`}>
        <Nav />
        <Home />
        <About />
        <CallToAction />
      </div>
    </AppContext.Provider>
  );
}
