import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Project from "./pages/Project/Project";
import Profile from "./pages/Profile/Profile";
import Offer from "./pages/Offer/Offer";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Profile />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/project">
            <Project />
          </Route>
          <Route path="/offer">
            <Offer />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
