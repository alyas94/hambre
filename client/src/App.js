import React from "react";
// import MapComponent from "./components/Map/MapComponent";
import MapPage from "./pages/MapPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import signup from "./components/SignupLogin/signup";

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={MapPage} />
      <Route exact path="/signup" component={signup} />
    </div>
  </Router>
);

export default App;
