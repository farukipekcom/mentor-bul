import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Project from "./pages/Project/Project";
import Profile from "./pages/Profile/Profile";
import Offer from "./pages/Offer/Offer";
import Category from "./pages/Category/Category";
import SubCategory from "./pages/SubCategory/SubCategory";
import Search from "./pages/Search/Search";
import AddProject from "./pages/AddProject/AddProject";
import Homepage from "./pages/Homepage/Homepage";
import BoughtProject from "./pages/BoughtProject/BoughtProject";
import MenteeFinance from "./pages/MenteeFinance/MenteeFinance";
import SellProject from "./pages/SellProject/SellProject";
import MentorFinance from "./pages/MentorFinance/MentorFinance";
import SettingGeneral from "./pages/SettingGeneral/SettingGeneral";
import SettingPayment from "./pages/SettingPayment/SettingPayment";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Homepage />
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
          <Route path="/category">
            <Category />
          </Route>
          <Route path="/sub-category">
            <SubCategory />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/addproject">
            <AddProject />
          </Route>
          <Route path="/boughtProject">
            <BoughtProject />
          </Route>
          <Route path="/menteeFinance">
            <MenteeFinance />
          </Route>
          <Route path="/sellProject">
            <SellProject />
          </Route>
          <Route path="/mentorFinance">
            <MentorFinance />
          </Route>
          <Route path="/settingsGeneral">
            <SettingGeneral />
          </Route>
          <Route path="/settingsPayment">
            <SettingPayment />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
