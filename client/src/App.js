import React from "react";
// import MapComponent from "./components/Map/MapComponent";
import MapPage from "./pages/MapPage";
import SignUp from "./components/SignupPrompt/Login-Signup"; //which component do we need this one
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import UserSignUP from "./components/SignupLogin/usersignup";
import TruckSignUP from "./components/SignupLogin/trucksignhup";
import Login from "./components/SignupLogin/LoginPage";

//import signup from "./components/SignupLogin/signup";//or this one
import OwnerPage from "./pages/OwnerPage";
// import LoginPage from "./components/SignupLogin/LoginPage";
import Error from "./components/ErrorPage/Error";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={MapPage} />
        {/* <Route exact path="/signup" component={signUp} /> */}
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signup-user" component={UserSignUP} />
        <Route exact path="/signup-truck" component={TruckSignUP} />
        <Route exact path="/dashboard/owner" component={OwnerPage} />
        <Route exact path="/login" component={Login} />
        <Route component={Error} />
      </Switch>
    </div>
  </Router>
);

export default App;
