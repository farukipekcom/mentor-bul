import "./SettingPayment.scss";
import { Header, Category, Footer } from "../components";
import { SettingsMenuCard, SettingsPaymentCard } from "../../components";
function SettingPayment() {
  return (
    <div className="rightSidebar">
      <Header />
      <Category />
      <div className="container">
        <div className="sidebar">
          <SettingsMenuCard />
        </div>
        <div className="content">
          <div className="title">Ödeme Bilgileri</div>
          <SettingsPaymentCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SettingPayment;
