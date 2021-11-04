import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Project from "./components/Project";
import { BrowserRouter,Switch, Route } from "react-router-dom";
import Projectbox from "./components/Project-box";

const Home = () => {
  return (
    <>
      <Navbar />
        <Main />
    </>
  );
};

const Pro = () => {
  return (
    <>
      <Navbar/>
      <Project/>
    </>
  );
};

const Service = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Project</h1>
      </section>
    </>
  );
};

// const Contact = () => {
//   return (
//     <>
//       <Navbar />
//       <section className="hero-section">
//         <p>Welcome to </p>
//         <h1>Contact Us</h1>
//       </section>
//     </>
//   );
// };

const Ap = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/projects">
        <Pro />
      </Route>

      <Route path="/service">
        <Service />
      </Route>

      {/* <Route path="/contact">
        <Contact />
      </Route> */}
    </Switch>
    </BrowserRouter>
  );
};

export default Ap;