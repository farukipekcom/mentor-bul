import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
import SettingEducation from "./pages/SettingEducation/SettingEducation";
import SettingTools from "./pages/SettingTools/SettingTools";
import SettingPassword from "./pages/SettingPassword/SettingPassword";
import Messages from "./pages/Messages/Messages";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import MenteeProjects from "./pages/MenteeProjects/MenteeProjects";
import OfferProjects from "./pages/OfferProjects/OfferProjects";
import Order from "./pages/Order/Order";
import RequestCategory from "./pages/RequestCategory/RequestCategory";
import RequestProfession from "./pages/RequestProfession/RequestProfession";
import SendOffer from "./pages/SendOffer/SendOffer";
import Payment from "./pages/Payment/Payment";
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
          <Route path="/settingsEducation">
            <SettingEducation />
          </Route>
          <Route path="/settingsTool">
            <SettingTools />
          </Route>
          <Route path="/settingsPassword">
            <SettingPassword />
          </Route>
          <Route path="/messages">
            <Messages />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/menteeProjects">
            <MenteeProjects />
          </Route>
          <Route path="/offerProjects">
            <OfferProjects />
          </Route>
          <Route path="/order">
            <Order />
          </Route>
          <Route path="/requestCategory">
            <RequestCategory />
          </Route>
          <Route path="/requestProfession">
            <RequestProfession />
          </Route>
          <Route path="/sendOffer">
            <SendOffer />
          </Route>
          <Route path="/payment">
            <Payment />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
