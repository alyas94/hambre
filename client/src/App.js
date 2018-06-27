import React from "react";
import MapComponent from "./components/Map/MapComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={MapComponent} />
    </div>
  </Router>
);

export default App;
