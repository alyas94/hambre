import React from "react";
// import MapComponent from "./components/Map/MapComponent";
import MapPage from "./pages/MapPage";
import SignUp from "./components/SignupPrompt/Login-Signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserSignUP from "./components/SignupLogin/usersignup";
import TruckSignUP from "./components/SignupLogin/trucksignhup";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={MapPage} />
        <Route  exact path="/signup" component={SignUp} />
    

        <Route  exact path='/signup-user' component={UserSignUP} />
        <Route  exact path='/signup-truck' component={TruckSignUP}/>
      </Switch>
    </div>
    </Router>
);

export default App;
