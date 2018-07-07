import React from "react";
// import MapComponent from "./components/Map/MapComponent";
import MapPage from "./pages/MapPage";
import SignUp from "./components/SignupPrompt/Login-Signup"; //which component do we need this one 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import UserSignUP from "./components/SignupLogin/usersignup";
import TruckSignUP from "./components/SignupLogin/trucksignhup";

//import signup from "./components/SignupLogin/signup";//or this one
import OwnerPage from "./pages/OwnerPage";


const App = () => (
  <Router>
    <div>
<Switch>
      <Route exact path="/" component={MapPage} />
      {/* <Route exact path="/signup" component={signUp} /> */}
        <Route  exact path="/signup" component={SignUp} />
        <Route  exact path='/signup-user' component={UserSignUP} />
        <Route  exact path='/signup-truck' component={TruckSignUP}/>
        <Route exact path="/OwnersPage" component={OwnerPage} />

      </Switch>

    </div>
    </Router>
);

export default App;
