import React from "react";
// import MapComponent from "./components/Map/MapComponent";
import MapPage from "./pages/MapPage";
import SignUp from "./components/SignupPrompt/Login-Signup"; //which component do we need this one 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import signup from "./components/SignupLogin/signup";//or this one
import usersignup from "./components/SignupLogin/usersignup";
import OwnerPage from "./pages/OwnerPage";

const App = () => (
  <Router>
    <div>
<Switch>
      <Route exact path="/" component={MapPage} />
      <Route exact path="/signup" component={signup} />
      <Route exact path="/user/signup" component={usersignup} />

        <Route exact path="/" component={MapPage} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/OwnersPage" component={OwnerPage} />
      </Switch>

    </div>
  </Router>
);

export default App;
