import React from "react";
// import MapComponent from "./components/Map/MapComponent";
import MapPage from "./pages/MapPage";
import SignUp from "./components/SignupPrompt/Login-Signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OwnerPage from "./pages/OwnerPage";

const App = () => (
  <Router>
    <div>
<<<<<<< HEAD
      <Switch>
        <Route exact path="/" component={MapPage} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/OwnersPage" component={OwnerPage} />
      </Switch>
=======
      <Route exact path="/" component={MapPage} />
      <Route exact path="/owners" component={OwnerPage} />
>>>>>>> owners page added
    </div>
  </Router>
);

export default App;
