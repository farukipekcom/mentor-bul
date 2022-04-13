import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import OrderBought from "./pages/OrderBought/OrderBought";
import RequestCategory from "./pages/RequestCategory/RequestCategory";
import RequestProfession from "./pages/RequestProfession/RequestProfession";
import SendOffer from "./pages/SendOffer/SendOffer";
import Payment from "./pages/Payment/Payment";
import OrderSell from "./pages/OrderSell/OrderSell";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/project/:username" element={<Project />} />
          <Route path="/offer/:username" element={<Offer />} />
          <Route path="/category/:slug" element={<Category />} />
          <Route path="/search/:slug" element={<Search />} />
          <Route path="/orderBought/:slug" element={<OrderBought />} />
          <Route path="/orderSell/:slug" element={<OrderSell />} />
          <Route path="/sub-category" element={<SubCategory />} />
          <Route path="/addproject" element={<AddProject />} />
          <Route path="/boughtProject" element={<BoughtProject />} />
          <Route path="/menteeFinance" element={<MenteeFinance />} />
          <Route path="/sellProject" element={<SellProject />} />
          <Route path="/mentorFinance" element={<MentorFinance />} />
          <Route path="/settingsGeneral" element={<SettingGeneral />} />
          <Route path="/settingsPayment" element={<SettingPayment />} />
          <Route path="/settingsEducation" element={<SettingEducation />} />
          <Route path="/settingsTool" element={<SettingTools />} />
          <Route path="/settingsPassword" element={<SettingPassword />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/menteeProjects" element={<MenteeProjects />} />
          <Route path="/offerProjects" element={<OfferProjects />} />
          <Route path="/requestCategory" element={<RequestCategory />} />
          <Route path="/requestProfession" element={<RequestProfession />} />
          <Route path="/sendOffer" element={<SendOffer />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
