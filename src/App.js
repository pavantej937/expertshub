import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import "./App.css";
import Home from "./pages/home/Home";
import Education from "./pages/education/Education";
import Testimonials from "./pages/testimonials/Testimonials";


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
          <Education/>
        </Route>
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
