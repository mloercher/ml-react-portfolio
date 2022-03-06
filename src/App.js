import { React, useState } from "react";
// React Router imports below---in V6, Switch is replaced by Routes
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import components below
import About from "./components/About";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home";

function App() {
  // const [pageRendered, setPageRendered] = useState("Home");
  const [backgroundColor, setBackgroundColor] = useState("#DAEFB3");
  const [navColor, setNavColor] = useState("#DAEFB3");

  function renderApp() {
    // if(pageRendered == "Home") {

    // }

    return (
      <div
        className="App"
        style={{
          backgroundColor: backgroundColor,
          navColor: navColor,
          height: "100vh",
        }}
      >
        <Nav
          setBackgroundColor={setBackgroundColor}
          setNavColor={setNavColor}
        />
        {/* Routes = Switch in react router v6 */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </div>
    );
  }

  // RETURNS---------------------------------------

  return <Router>{renderApp()}</Router>;
}

export default App;

// declaring the name of the state (pageRendered) and name of setter func
// setting default state to About

// original return for prop conditional rendering

/* <div>
  <Nav setter={setPageRendered} />
  <main>{renderMain()}</main>
</div>; */

// Original main render func
// if current state (pageRendered) is About, return About component
// if current state (pageRendered) is Projects, return Projects component
// if current state (pageRendered) is Contact, return Contact component
// function renderMain() {
//   if (pageRendered === "About") {
//     return <About />;
//   } else if (pageRendered === "Projects") {
//     return <Projects />;
//   } else if (pageRendered === "Contact") {
//     return <Contact />;
//   }
// }
