import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Contact from "./Contact";
import About from "./About";
import Project from "./Project";
import Resume from "./Resume";

const Main = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/portfolio" exact component={LandingPage} />
        <Route exact path="/portfolio/contact" exact component={Contact} />
        <Route exact path="/portfolio/about" exact component={About} />
        <Route exact path="/portfolio/project" exact component={Project} />
        <Route exact path="/portfolio/resume" exact component={Resume} />
      </Switch>
    </div>
  );
};

export default Main;
