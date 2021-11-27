import "./SettingPayment.scss";
import { Header, Category, Footer } from "../components";
import { SettingsMenuCard, SettingsPaymentCard } from "../../components";
import { slide as Menu } from "react-burger-menu";
function SettingPayment() {
  return (
    <div className="main">
      <Header />
      <Category />
      <div className="container">
        <div className="sidebar">
          <SettingsMenuCard />
        </div>
        <div className="content">
          <div className="navLeftMenu">
            <Menu burgerButtonClassName={"leftMenu"}>
              <SettingsMenuCard />
            </Menu>
          </div>
          <div className="title">Ödeme Bilgileri</div>
          <SettingsPaymentCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SettingPayment;
