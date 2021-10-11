import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import "./App.css";
import Home from "./pages/home/Home";
import Education from "./pages/education/Education";
import Testimonials from "./pages/testimonials/Testimonials";
import VideoTestimonials from "./pages/videoTestmonials/VideoTestimonials";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/testimonials">
          <Testimonials />
        </Route>
        <Route path="/education">
          <Education />
        </Route>

        <Route path="/video">
          <VideoTestimonials />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
